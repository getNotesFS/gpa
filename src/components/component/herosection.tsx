 
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"

export default function HeroSection() {
  return (
    // 
    
    <section className="w-full py-48 md:py-24 lg:py-32 xl:py-48   dark:black ">
      
      <div className="container px-4 md:px-6">
      
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
          
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              ¿Cuál es mi <span className="text-red-600">GPA</span>?
            </h1>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Una calculadora de GPA para estudiantes de la Universidad de San Francisco de Quito.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Link href="#calculargpa">
              <Button className="w-full md:w-auto">Calcular GPA</Button>
            </Link>

            <Dialog >
              <DialogTrigger asChild>
                <Button variant="secondary">Acerca de</Button>
              </DialogTrigger>
              <DialogContent className="overflow-y-auto min-h-min max-h-full mt-4 w-2/3 dark:bg-[#151f3b]  ">
                <DialogHeader >
                  <DialogTitle>¿Cómo se realiza el cálculo?</DialogTitle>
                  <div className="overflow-y-auto text-left ">
                    <div className="pt-4 dark:text-white-700">
                      <section>
                        <h2 className="text-xl font-bold text-black-600 mb-2">Valores de Calificación:</h2>
                        <p className="mb-4">

                          A = 4, B = 3, C = 2, D = 1, y todo lo demás (F, I, N, P) = 0.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold text-black-600 mb-2">Calcular tu GPA:</h2>
                        <p className="mb-4">

                          El GPA semestral resulta de dividir la suma total de puntos por el número de créditos válidos. Recuerda:
                          <span className="text-red-500"> asignaturas con 0 créditos no afectan tu GPA.</span>
                        </p>
                      </section>



                      <section>
                        <h2 className="text-xl font-bold text-black-600 mb-2">Honores y Distinciones: Excelencia Académica</h2>
                        <ul className="list-disc pl-5 mb-4">
                          <li>
                            <strong>Lista de Honor del Canciller:</strong> Para estudiantes con promedio semestral <strong>≥ 3.70/4.00</strong>. ¡Tu nombre destacará en la Cartelera de Honores!
                          </li>
                          <li>
                            <strong>Lista de Honor del Decano:</strong> Para promedios entre <strong>3.50/4.00</strong> y <strong>3.69/4.00</strong>. ¡Reconocimiento a tu esfuerzo académico!
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold text-black-600 mb-2">Distinciones al Graduarse</h2>
                        <ul className="list-disc pl-5 mb-4">
                          <li><strong>Cum Laude:</strong> Graduados con promedio de 3.50 a 3.69.</li>
                          <li><strong>Magna Cum Laude:</strong> Graduados con promedio de 3.70 a 3.89.</li>
                          <li><strong>Summa Cum Laude:</strong> La mayor distinción para promedios ≥ 3.90.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold text-black-600 mb-2">Observaciones:  </h2>
                        <p><strong>Calificación con letra D: </strong>61 a 70.99%* Aceptable a nivel de grado para materias de <strong>Colegio General</strong>, a menos
                          que la materia requiera otra nota superior. <strong>La nota D no es aprobatoria para materias
                            de posgrado ni de carrera</strong>, aunque además satisfaga un requisito de Colegio General.</p>

                        <br />


                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                <th className="border p-2">Letra</th>
                                <th className="border p-2">Puntos</th>
                                <th className="border p-2">Rango</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">A</td>
                                <td className="border p-2">4.00</td>
                                <td className="border p-2">91 a 100%</td>
                              </tr>
                              <tr>
                                <td className="border p-2">B</td>
                                <td className="border p-2">3.00</td>
                                <td className="border p-2">81 a 90.99%</td>
                              </tr>
                              <tr>
                                <td className="border p-2">C</td>
                                <td className="border p-2">2.00</td>
                                <td className="border p-2">71 a 80.99%</td>
                              </tr>
                              <tr>
                                <td className="border p-2">D</td>
                                <td className="border p-2">1.00</td>
                                <td className="border p-2">61 a 70.99%</td>
                              </tr>
                              <tr>
                                <td className="border p-2">F</td>
                                <td className="border p-2">0.00</td>
                                <td className="border p-2">≤ 60.99%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </section>

                      
                      <section>
                        <br />
                        <h2 className="text-xl font-bold text-black-600 mb-2">Fuente:</h2>
                        <a className="text-red-600" href="https://www.usfq.edu.ec/sites/default/files/2022-08/usfq-manual-del-estudiante-de-grado-2022-2023.pdf" target="_blank">
                          Manual del Estudiante de Grado 2022-2023
                        </a>
                      </section>


                      <br />
                    </div>

                  </div>


                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>


    </section>
  )
}
