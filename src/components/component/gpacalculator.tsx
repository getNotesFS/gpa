'use client';
import React, { useState, useEffect, useCallback } from 'react';

import Image from 'next/image'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaTrash, FaBook } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineNumbers, MdGrade } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
type Subject = {
  name: string;
  credits: number;
  grade: string;
  points?: number;
  credits_nc: number;
};

import mensajes from '@/data/data.js';


export default function GPACalculator() {



  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [currentSubject, setCurrentSubject] = useState<Subject>({ name: '', credits: 0, grade: '', points: 0, credits_nc: 0 });

  const [gpa, setGPA] = useState<number>(0);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [totalCredits_nc, setTotalCredits_nc] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const [mensajeAliento, setMensajeAliento] = useState<String>('');
  const [mensajeFelicitaciones, setMensajeFelicitaciones] = useState<String>('');

  const msg_aliento = mensajes.aliento;
  const msg_felicitaciones = mensajes.felicitaciones;

  const handlerMensajeAliento = () => {
    // Mensaje de aliento aleatorio
    const mensajes_a = Math.floor(Math.random() * msg_aliento.length);
    setMensajeAliento(msg_aliento[mensajes_a]);
  }

  const handlerMensajeFelicitaciones = () => {
    // Mensaje de felicitaciones aleatorio
    const mensajes_f = Math.floor(Math.random() * msg_felicitaciones.length);
    setMensajeFelicitaciones(msg_felicitaciones[mensajes_f]);
  }
  const [texto, setTexto] = useState('');
  const { toast } = useToast()



  const addSubject = () => {
    if (currentSubject.name.trim() === '') {
      currentSubject.name = `Asignatura ${subjects.length + 1}`;
    }

    if (currentSubject.grade === '') {
      toast({
        title: "No puede agregar una calificación vacía.",
        description: "Selecciona una calificación para calcular tu GPA.",
      })
    } else {

      if (currentSubject.grade === 'P' || currentSubject.grade === 'F' && currentSubject.credits === 1) {
        currentSubject.credits_nc = currentSubject.credits;
        currentSubject.credits = 0;
        currentSubject.points = 0;
      } else {
        const tmp_points = gradeToPoint(currentSubject.grade) * currentSubject.credits;
        currentSubject.points = tmp_points; 
      }



      setSubjects([...subjects, currentSubject]);
      toast({
        title: "Calificación de " + currentSubject.name + " agregada",
        description: (
          <>
            <strong>Créditos: </strong>{currentSubject.credits},  <strong>Calificación: </strong>{currentSubject.grade}
          </>
        ),
      });


      calculateGPA();

      setCurrentSubject({ name: '', credits: 0, grade: '', points: 0, credits_nc: 0 });
    }


  };

  const removeSubject = (index: number) => {




    setSubjects(subjects.filter((_, i) => i !== index));
    calculateGPA();

    toast({
      description: (
        <span>
          Se ha eliminado la calificación de <strong>{subjects[index].name}</strong>
        </span>
      )
    })
  };


  const calculateGPA = useCallback(() => {


    const totalCredits_nc = subjects.reduce((total, subject) => total + subject.credits_nc, 0);
    if (totalCredits_nc != 0) {
      setTotalCredits_nc(totalCredits_nc);
    } else {
      setTotalCredits_nc(0);
    }

    const totalCredits = subjects.reduce((total, subject) => total + subject.credits, 0);

    if (totalCredits === 0) {
      setGPA(0);
      setTotalCredits(0);
      setTotalPoints(0);
      return;
    }



    const totalPoints = subjects.reduce((total, subject) => total + (gradeToPoint(subject.grade) * subject.credits), 0);



    setGPA(totalPoints / totalCredits);
    setTotalCredits(totalCredits);
    setTotalPoints(totalPoints);
    setTexto('Tu GPA es: ' + (totalPoints / totalCredits).toFixed(2));
    handlerMensajeAliento();
    handlerMensajeFelicitaciones();
  }, [subjects]);


  const gradeToPoint = (grade: string): number => {
    if (grade === 'A') return 4;
    if (grade === 'B') return 3;
    if (grade === 'C') return 2;
    if (grade === 'D') return 1;
    if (grade === 'F') return 0;
    if (currentSubject.credits != 0 && currentSubject.grade === 'P') {
      return 0;
    }
    if (currentSubject.credits === 0 && currentSubject.grade === 'P') {
      return 0;
    }

    return 0;
  };



  const handleSubjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSubject({ ...currentSubject, name: e.target.value });
  };

  const handleCreditHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSubject({ ...currentSubject, credits: parseInt(e.target.value) });
  };

  const handleGradeChange = (value: string) => {
    setCurrentSubject({ ...currentSubject, grade: value });
  };

  const handleClearSubjects = () => {
    setSubjects([]);
    setCurrentSubject({ name: '', credits: 0, grade: '', points: 0, credits_nc: 0 });
    setGPA(0);
    setTotalCredits(0);
    setTotalPoints(0);
    setTexto('');

    toast({
      title: "Se han eliminado todas las calificaciones",
    })
  };

  useEffect(() => {
    calculateGPA();
  }, [subjects, calculateGPA]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-12 px-4 py-8  shadow-md rounded-lg dark:custom-shadow mb-12">
      <CardHeader>
        <CardTitle className="text-2xl">Calcular GPA</CardTitle>
        <CardDescription>Ingresa la asignatura (o cualquier identificador), el número de créditos y la letra.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">


          <div className="  p-4 rounded-lg shadow-md dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white  dark:custom-shadow">
            <h3 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Total de Asignaturas</h3>
            <p className="text-xl font-bold">{subjects.length}</p>
          </div>

          <div className="  p-4 rounded-lg shadow-md dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white dark:custom-shadow">
            <h3 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Total de Créditos</h3>
            <p className="text-xl font-bold">{totalCredits}</p>
            <div>
              {totalCredits_nc != 0 ? (
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <p className="text-xs font-bold">No contables</p>
                  <p className="text-xs font-bold">{totalCredits_nc}</p>
                </div>
              ) : ''
              }



            </div>
          </div>

          <div className="  p-4 rounded-lg shadow-md dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white dark:custom-shadow">
            <h3 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">Total de Puntos</h3>
            <p className="text-xl font-bold">{totalPoints}</p>
          </div>

          <div className="  p-4 rounded-lg shadow-md dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white dark:custom-shadow">
            <h3 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">GPA</h3>
            <p className="text-xl font-bold">{gpa.toFixed(2)}</p>
            {gpa >= 3.70 ? (


              <Image src="/congrats.png" alt="" width={32} height={32} />
            ) : ''}
            {gpa >= 3.50 && gpa < 3.70 ? (



              <Image src="/congrats.png" alt="" width={32} height={32} />
            ) : ''}
          </div>

        </div>
        <div>


          {gpa >= 3.70 && subjects.length >= 2 ? (
            <div className='text-xl font-bold  text-center text-xs bg-gray-50 dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white rounded-md p-2  p-2 gap-4'>

              <div className='inline-flex items-center gap-2'>

                <Image src="/congrats.png" alt="" width={32} height={32} />
                <p>Estás en  Lista de Honor del CANCILLER</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" name='sorpresa-btn'>¡Sorpresa!</Button>
                  </DialogTrigger>
                  <DialogContent className="overflow-y-auto  max-h-[600px] md:w-2/3 sm:w-11/12 dark:bg-[#151f3b]">
                    <DialogHeader >
                      <DialogTitle>Reclama tu regalo</DialogTitle>
                      <div className="overflow-y-auto text-left">
                        <div className="pt-4 text-gray-700 justify-center">
                          <br />
                          <ImQuotesRight size={32} className="text-gray-600" />
                          <p className="text-gray-600 dark:text-white">{mensajeFelicitaciones}</p>
                          <br />

                          <div className='flex justify-center   flex-col items-center'>
                            <Image src="/dragon-1.jpeg" alt="" width={500} height={500} />
                            <a href="/dragon-1.jpeg" download="dragon-1.jpeg" className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                              <FaCloudDownloadAlt className="w-5 h-5 mr-2" />
                              Descargar Imagen
                            </a>
                          </div>

                        </div>




                      </div>


                    </DialogHeader>
                    <DialogFooter className="lg:justify-center pb-8">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary" name='continuar-btn' className="md:w-full lg:w-auto">
                          Continuar
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ) : ''}
          {gpa >= 3.50 && gpa < 3.70 && subjects.length >= 2 ? (
            <div className='text-xl font-bold  text-center text-xs bg-gray-50 dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white rounded-md p-2  p-2 gap-4'>

              <div className='inline-flex items-center gap-2'>
                <Image src="/congrats.png" alt="" width={32} height={32} />
                <p>Estás en  Lista de Honor del DECANATO</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" name='sorpresa-2'>¡Sorpresa!</Button>
                  </DialogTrigger>
                  <DialogContent className="overflow-y-auto  max-h-[600px] md:w-2/3 sm:w-11/12 dark:bg-[#151f3b]">
                    <DialogHeader >
                      <DialogTitle>Reclama tu regalo</DialogTitle>
                      <div className="overflow-y-auto text-left">
                        <div className="pt-4 text-gray-700">
                          <br />
                          <ImQuotesRight size={32} className="text-gray-600" />
                          <p className="text-gray-600 dark:text-white">{mensajeFelicitaciones}</p>
                          <br />


                          <div className='flex justify-center   flex-col items-center'>
                            <Image src="/dragon-2.jpeg" alt="" width={500} height={500} />
                            <a href="/dragon-2.jpeg" download="dragon-2.jpeg" className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                              <FaCloudDownloadAlt className="w-5 h-5 mr-2" />
                              Descargar Imagen
                            </a>
                          </div>
                        </div>

                      </div>


                    </DialogHeader>
                    <DialogFooter className="lg:justify-center pb-8">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary" name='continuar-btn' className="md:w-full lg:w-auto">
                          Continuar
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ) : ''}

          {gpa < 3.50 && gpa > 0 && subjects.length >= 2 ? (
            <div className='text-xl font-bold  text-center text-xs bg-gray-50 dark:bg-transparent dark:text-white dark:border dark:border-solid dark:border-white rounded-md p-2  p-2 gap-4'>

              <div className='inline-flex items-center gap-2'>

                <br />
                <ImQuotesRight size={32} className="text-gray-600" />
                <blockquote className="text-gray-600 dark:text-white">{mensajeAliento} 💪🏼</blockquote>
                <br />


              </div>
            </div>
          ) : ''}



        </div>
        <div className="space-y-2">
          <Label htmlFor="subjectName">Asignatura</Label>
          <Input
            id="subjectName"
            placeholder="Nombre de la asignatura (opcional)"
            required
            onChange={handleSubjectNameChange}
            value={currentSubject.name || ''}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="creditHours">Número de Créditos</Label>
          <Input id="creditHours"
            placeholder="Ingresa el número de créditos"
            required type="number"
            onChange={handleCreditHoursChange}
            value={currentSubject.credits || ''}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="grades">Calificicación</Label>
          <ToggleGroup
            type="single"
            variant="filled"
            onValueChange={handleGradeChange}
            value={currentSubject.grade || ''}
            className='justify-start flex-wrap'
          >
            <ToggleGroupItem value="A" aria-label="Calificación con A ">
              A
            </ToggleGroupItem>
            <ToggleGroupItem value="B" aria-label="Calificación con B">
              B
            </ToggleGroupItem>
            <ToggleGroupItem value="C" aria-label="Calificación con C">
              C
            </ToggleGroupItem>
            <ToggleGroupItem value="D" aria-label="Calificación con D">
              D
            </ToggleGroupItem>
            <ToggleGroupItem value="F" aria-label="Calificación con F">
              F
            </ToggleGroupItem>
            <ToggleGroupItem value="P" aria-label="Calificación con P">
              P
            </ToggleGroupItem>



          </ToggleGroup>
        </div>
        <Button
          className="w-full break-words"
          onClick={addSubject}
          type='button'
          name='agregar-btn'
          disabled={currentSubject.grade === '' || currentSubject.credits === 0}
        >Añadir Calificación</Button>






        <div>
          <Button
            className="w-full break-words"
            variant="secondary"
            onClick={toggleExpand}
            type='button'
            name='mostrar-btn'
          >{isExpanded ? 'Ocultar' : 'Mostrar'} Asigtaturas</Button>
        </div>

        <br />
        <hr className='border-dashed p-3' />
        {isExpanded && (
          <div className="mt-6">
            {subjects.length > 0 ? (
              <section className=' flex flex-col gap-3'>
                <Button className='self-end' type='button' name='limpiar-btn' onClick={handleClearSubjects}> <FaTrash className="h-3 w-3 mr-1" /> Limpiar</Button>

                <ul className="flex flex-col gap-2  ">
                  {subjects.map((subject, index) => (
                    <li key={index}
                      className="flex justify-between items-center   px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-800 border dark:border dark:border-solid dark:border-white">
                      <div className="flex items-center space-x-4">
                        <FaBook />
                        <div>
                          <p className="text-sm font-medium">{subject.name}</p>

                          <div className="flex row-gap-3 text-sm text-muted-foreground flex-row flex-wrap">
                            <div className="flex items-center"><MdOutlineNumbers />Créditos: {subject.credits || subject.credits_nc}</div>
                            <div className="flex items-center"><MdGrade />Calificación: {subject.grade}</div>
                            <div className="flex items-center"><MdGrade />Puntos: {subject.points}</div>
                          </div>

                        </div>


                      </div>
                      <button type='button' onClick={() => removeSubject(index)} className="text-red-500 hover:text-red-700" name='eliminar-btn'>
                        <FaTrash className="h-5 w-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <p className="text-gray-500 text-center ">Agrega calificaciones para calcular tu GPA.</p>
            )}
          </div>
        )
        }
      </CardContent>
      <CardFooter>



      </CardFooter>
    </Card>
  )
}
