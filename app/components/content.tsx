import React from "react";
import starsBg from "../../public/images/bg-stars-1.webp";
import Image from "next/image";
import Card from './cards/cards';
import Link from "next/link";


export default function Content() {
    return (
        <div className="container mx-auto py-12 lg:px-11 px-8 relative overflow-hidden">
            <div className="text-wrappers who-are-we">
                <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Siapa Kita?</h1>
                <p className="text-white opacity-70 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestias at recusandae fugit reiciendis vel ut id sequi minus quisquam commodi nostrum odio delectus! Quibusdam omnis corporis odio ipsam dolore vitae distinctio ipsum a! Perferendis ratione mollitia debitis quidem. Quae assumenda optio quo, aliquid quam ullam deleniti cupiditate nesciunt eum sit itaque voluptas commodi cum at architecto incidunt. Numquam iure quas eveniet vitae dignissimos placeat sint totam provident quis? Assumenda, est commodi iure quaerat possimus consequatur exercitationem numquam tenetur. Provident eaque adipisci saepe maiores deleniti nesciunt laudantium et, unde accusamus earum nihil porro veritatis, qui, ut corporis esse. Corrupti, dolor!
                </p>
            </div>
            <Image
                alt="acc-cnnx"
                src={starsBg}
                className="absolute -top-24 -z-10 pointer-events-none select-none"
            ></Image>
            <div className="text-wrappers what-are-we-doing mt-12 pt-12 border-t-2">
                <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Apa Yang Kita Lakukan?</h1>
                <div className="cards-wrapper grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M102-160q-20 0-33.5-13.5T55-207v-233q0-27.859 9.5-53.93Q74-520 95-532.55V-639q0-54.667 38-93.333Q171-771 226-771h180q21 0 40.149 9.031T480-739q14.702-13.938 33.351-22.969T553-771h180q54.667 0 93.833 38.667Q866-693.667 866-639v106.45q20 12.55 30 38.62 10 26.071 10 53.93v233q0 20-14.088 33.5-14.087 13.5-34 13.5Q838-160 824.5-173.5T811-207v-33H149v33q0 20-13.5 33.5T102-160Zm408-380h261v-99q0-16.275-10.912-26.638Q749.175-676 733-676H541q-13.9 0-22.45 11.05Q510-653.9 510-639v99Zm-321 0h261v-99q0-15-8.55-26T419-676H226q-15.175 0-26.087 10.912Q189-654.175 189-639v99Zm-40 206h662v-115q0-13-8.912-22-8.913-9-22.088-9H180q-13.175 0-22.087 8.913Q149-462.175 149-449v115Zm662 0H149h662Z" /></svg>
                        <h1 className="text-white text-lg opacity-70">Sleep</h1>
                        <p className="text-slate-500">Dimana ada jamkos disitu ada perturuan</p>
                    </Card>
                    <Card>
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M682-248q-14 14-33.5 13T616-249q-14-14-14-34t14-33l165-165-164-164q-14-14-13.5-33.5T618-712q14-14 34-14t34 14l196 197q14 14 14 33t-14 33L682-248Zm-406-5L78-449q-14-14-14-33t14-33l200-201q14-14 34-13.5t34 13.5q13 14 13 34t-13 33L180-483l163 163q14 15 14.5 34T344-253q-15 14-34.5 14T276-253Z" /></svg>
                        <h1 className="text-white text-lg opacity-70">Code</h1>
                        <p className="text-slate-500">Ngoding kalo lagi ada mapelnya aja</p>
                    </Card>
                    <Card>
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M147.278-175Q96-175 68-211.5 40-248 47-302l47-333q8.112-61.609 57.966-106.304Q201.819-786 265-786h431q63.181 0 113.034 44.696Q858.888-696.609 867-635l46 333q7 55-21.812 91-28.813 36-76.995 36Q787-175 766-184q-21-9-35-23l-98.05-98H328l-98 98q-14 14-34.833 23-20.834 9-47.889 9ZM158-271l129-128h387l129 128.017Q807-267 814.68-264q3.445 0 4.882-6.583Q821-277.167 821-281l-48-339q-5-32-26.824-51.5Q724.351-691 698-691H264q-26.757 0-48.878 19.5Q193-652 189-620l-48 339q-1 4-.25 10.5t4.865 6.5Q151-264 158-271Zm538-174q16 0 28-12t12-28q0-15-12-27.5T696-525q-16 0-28 12.5T656-485q0 16 12 28t28 12Zm-77-121q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM326.116-451q9.884 0 17.384-7.083Q351-465.167 351-476v-44h44q9.833 0 17.417-7.116 7.583-7.117 7.583-18Q420-556 412.417-563q-7.584-7-17.417-7h-44v-43.509q0-11.324-7.616-18.408-7.617-7.083-18-7.083Q315-639 308-631.917q-7 7.084-7 17.917v44h-44.509q-11.324 0-18.408 7.116-7.083 7.117-7.083 18Q231-534 238.083-527q7.084 7 18.408 7H301v43.509q0 11.324 7.116 18.408 7.117 7.083 18 7.083ZM481-478Z" /></svg>
                        <h1 className="text-white text-lg opacity-70">Gaming</h1>
                        <p className="text-slate-500">Permabaran santuy ketika ada jamkos</p>
                    </Card>
                </div>
            </div>
            <div className="members-wrappers connexsoft-members mt-20 pt-12 border-t-2">
                <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Members</h1>
                <div className="cards-members-wrappers grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <div className="members-wrapper flex flex-row justify-center  gap-4 w-full h-full items-center">
                            <div className="member-pictures">
                                <Image src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694887671/coco_jtevn8.png"} height={80} width={80} alt="greseks"></Image>
                            </div>
                            <div className="member-info">
                                <div className="member-name text-white">
                                    <h1>Abraham Gregorius</h1>
                                </div>
                                <div className="member-roles text-slate-500">
                                    <p>Backend Developer</p>
                                </div>

                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="members-wrapper flex flex-row justify-center  gap-4 w-full h-full items-center">
                            <div className="member-pictures">
                                <Image className="brightness-75 contrast-125" src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694922878/DSCF0963-fotor-20230917105424_ex6fpl.png"} height={80} width={80} alt="rlorenzo"></Image>
                            </div>
                            <div className="member-info">
                                <div className="member-name text-white">
                                    <h1>M Raya Arizky</h1>
                                </div>
                                <div className="member-roles text-slate-500">
                                    <p>Mobile App Developer</p>
                                </div>

                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="members-wrapper flex flex-row justify-center  gap-4 w-full h-full items-center">
                            <div className="member-pictures">
                                <Image src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694923079/20230615_141545-fotor-20230917105745_dw47kh.png"} height={80} width={80} alt="rlorenzo"></Image>
                            </div>
                            <div className="member-info">
                                <div className="member-name text-white">
                                    <h1>M Thomy Hasyimi</h1>
                                </div>
                                <div className="member-roles text-slate-500">
                                    <p>Front End Developer</p>
                                </div>

                            </div>
                        </div>

                    </Card>
                </div>
                <div className="show-more mt-20 cursor-pointer text-white text-end">
                    <Link href="/members">
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
            <div className="articles-wrappers connexsoft-members mt-20 pt-12 border-t-2">
                <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Articles</h1>
                <div className="articles-wrappers grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <div className="article-card-wrapper flex flex-col justify-between relative w-full h-full">
                            <div className="article-title text-slate-300">
                                <h1>Tips Belajar Game Development</h1>
                            </div>
                            <div className="articles-info flex items-center justify-between">
                                <div className="article-writer flex gap-2 items-center flex-row">
                                    <Image alt="faris" width={30} height={30} src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694891070/WhatsApp_Image_2023-08-11_at_4.27.00_AM-fotor-202309172411_qxliky.png"}></Image>
                                    <p className="text-slate-400">Faris Maulana</p>
                                </div>
                                <div className="articles-links text-slate-400">
                                    <p>Selengkapnya</p>
                                  </div>
                            </div>

                        </div>
                    </Card>
                    <Card>

                        <div className="article-card-wrapper flex flex-col justify-between relative w-full h-full">
                            <div className="article-title text-slate-300">
                                <h1>Tren UI/UX 2023 untuk Developer</h1>
                            </div>
                            <div className="articles-info cursor-pointer flex items-center justify-between">
                                <div className="article-writer flex gap-2 items-center flex-row">
                                    <Image alt="lorenzax" width={30} height={30} src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694924519/IMG_20230713_151213-fotor-20230917112143_i6v8nw.png"}></Image>
                                    <p className="text-slate-400">Rafael Lorenzo</p>
                                </div>
                                <div className="articles-links text-slate-400">
                                    <p>Selengkapnya</p>
                                </div>
                            </div>

                        </div>
                    </Card>
                    <Card>
                        <div className="article-card-wrapper flex flex-col justify-between relative w-full h-full">
                            <div className="article-title text-slate-300">
                                <h1>Apakah NodeJS Bagus Untuk Backend?</h1>
                            </div>
                            <div className="articles-info flex items-center justify-between">
                                <div className="article-writer gap-2 flex items-center flex-row">
                                   <Image alt="ikhsan" width={30} height={30} src={"https://res.cloudinary.com/dewnyzbmg/image/upload/v1694922691/adriansmilano-fotor-2023091710519_hlspkf.png"}></Image>
                                    <p className="text-slate-400">Adrians Ikhsan</p>
                                </div>
                                <div className="articles-links text-slate-400">
                                    <p>Selengkapnya</p>
                                </div>
                            </div>

                        </div>
                    </Card>
                </div>
                <div className="show-more mt-20 cursor-pointer text-white text-end">
                    <Link href="/articles">
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>


        </div>
    );
}
