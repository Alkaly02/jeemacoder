"use client"
import { Button } from "@/components/button";
import { BanknoteIcon, Calendar, DoorClosed, Globe, MapPinIcon, SmilePlus, TagsIcon } from "lucide-react"
import { NavBar } from "@/components/home/navBar";
import { getHackathonById } from "@/app/utils/api/data";
import { useQuery } from "@tanstack/react-query";
import { DetailsCardItem } from "@/components/Card";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { MotivationPopup } from "@/components/participant/motivation-Popup";
import Image from "next/image";
import clsx from "clsx";
import hackathonlogoLoader from "@/app/utils/hackathonlogoLoader";
import { DetailsPageSkeletons } from "@/components/ui/detailsPgaeSkeletons";

export default function Details({params} : {params : {details : string[]}}) {
    const [detailsPath , hackathonId ] = params.details

    const {data , isLoading , isError} = useQuery({
        queryFn : async () => await getHackathonById(hackathonId),
        queryKey : ["hackathon"],
    }); 

    const [showModal , setShowModal] = useState<boolean>(false)
    const onClose = () => {setShowModal(!showModal)}
    const {name , logo_url , date_debut , date_limite , structure_organisateur , theme , date_fin , lieu , prix , status , slogan} = data || []

    return (<>
        <div>
            <div className="bg-dark z-10 sticky top-0">
                <NavBar />
            </div>
        { isLoading ? <DetailsPageSkeletons /> : 
            <div className="max-w-5xl m-auto my-10">
                <div className="flex gap-10">
                    <div className=" p-4 flex flex-col gap-5">
                            <div className="flex gap-10">
                                    <Image
                                        src={`${logo_url}`}
                                        loader={hackathonlogoLoader}
                                        alt=""
                                        width={150}
                                        height={120}
                                        className="rounded-lg"
                                    />
                                <div>
                                <h1 className={clsx("text-3xl font-semibold" , {
                                    "text-dark-green-hover" : theme == "vert",
                                    "text-orange" : theme == "orange",
                                    "text-dark" : theme == "neutre",

                                })}> {name}  </h1>
                                <p> {structure_organisateur} </p>
                                </div>
                            </div>
                        <div className="text-lg font-semibold">
                            <p className="text-sm bg-muted p-4 border rounded-md mb-5 text-dark">{slogan} </p>
                            <Button onClick={onClose} types="button" size="small" className="bg-dark text-white text-sm">
                                Participer
                            </Button>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam iusto eum quia cum reprehenderit consequuntur error enim ipsam obcaecati quos, consequatur, nulla, quis ullam asperiores natus? Sapiente, nemo quisquam. </p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam iusto eum quia cum reprehenderit consequuntur error enim ipsam obcaecati quos, consequatur, nulla, quis ullam asperiores natus? Sapiente, nemo quisquam. </p>
                        </div>
                    </div>
                    <div className="p-4 min-w-[400px] shadow-md rounded-md">
                    <div className="flex flex-col gap-10 rounded-md my-5">
            <div className="flex items-center gap-3"> 
                <DoorClosed className="stroke-1"/>
                <p> Deadline : {date_limite} </p>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <DetailsCardItem icon={Globe} text="Presentielle"theme={theme}/>
                <DetailsCardItem icon={MapPinIcon} text={lieu} theme={theme}/>
                <DetailsCardItem icon={ SmilePlus } text={status} theme={theme}/>
                <DetailsCardItem icon={BanknoteIcon} text={prix} theme={theme}/>
            </div>
            <div className="flex flex-col gap-5">
                <DetailsCardItem icon={Calendar} text=" Demarrage: " amount={date_debut} amounttheme={theme} />
                <DetailsCardItem icon={Calendar} text=" Fin :" amount={date_fin} amounttheme={theme} />
            </div>
            <div>
                <TagsIcon className="stroke-1"/>
                <div className="grid grid-cols-2 gap-2">
                    <span className="bg-light-orange rounded-full px-4 py-1 text-xs text-dark flex-item-center">Developpement-web</span>
                    <span className="bg-light-orange rounded-full px-4 py-1 text-xs text-dark flex-item-center"> Mobile </span>
                    <span className="bg-light-orange rounded-full px-4 py-1 text-xs text-dark flex-item-center"> React / larave </span>
                </div>
            </div>
        </div>
            </div>
            </div>
            <div>
                prix : {prix}
            </div>
            </div> }
            {isError && <div> failed fetching data </div> }
            </div>
            <Modal onClose={onClose} showModal={showModal} className="items-center">
                <MotivationPopup hackathon_id={hackathonId} onClose={onClose} />
            </Modal>
        </>)
}