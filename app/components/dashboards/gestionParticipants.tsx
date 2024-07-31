import { Cross1Icon, CheckIcon, EyeOpenIcon, SlashIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { getParticipants } from "@/app/utils/api/data"; // Assurez-vous que ce chemin est correct
import { Individuel } from '@/app/utils/definitions'; // Assurez-vous que ce chemin est correct
import Image from "next/image";

interface Props {
    hackathonId: string;
}

export const GestionParticipants: React.FC<Props> = ({ hackathonId } : {hackathonId : string}) => {
    const [participants, setParticipants] = useState<Individuel[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await getParticipants(hackathonId);
                console.log("Data received from API:", response);

                // Assurez-vous que la clé `Individuels` est correcte
                if (response.success && Array.isArray(response.Individuels)) {
                    setParticipants(response.Individuels.filter(participant => participant.status === 'accepté'));
                } else {
                    console.error("Expected an array of participants under 'Individuels', but got:", response);
                }
            } catch (error) {
                console.error("Error fetching participants:", error);
            }
        };

        fetchParticipants();
    }, [hackathonId]);

    const totalPages = Math.ceil(participants.length / itemsPerPage);

    const currentParticipants = participants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDetails = (id: string) => {
        console.log(`Showing details for participant ${id}`);
    };

    const handleBan = (id: string) => {
        console.log(`Banning participant ${id}`);
    };

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Gestion des Participants</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Photo</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Nom</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Prénom</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Motivation</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentParticipants.map((participant) => (
                            <tr key={participant.id}>
                                 <td className="py-2 px-4 border-b border-gray-200">
                                    <Image
                                        src={participant.user.photo || '/default-avatar.png'} // Utilisez une image par défaut si photo est null
                                        alt={`${participant.user.firstname} ${participant.user.lastname}`}
                                        className="w-12 h-12 rounded-full"
                                        width={100} height={100}
                                    />
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">{participant.user.firstname}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{participant.user.lastname}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{participant.motivation || 'N/A'}</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <div className="flex space-x-2">
                                        <button title="Details" className="text-blue-500 hover:bg-blue-100 rounded p-1" onClick={() => handleDetails(participant.id)}>
                                            <EyeOpenIcon />
                                        </button>
                                        <button title="Ban" className="text-red-500 hover:bg-red-100 rounded p-1" onClick={() => handleBan(participant.id)}>
                                            <SlashIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button
                        className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-orange-400 text-white"}`}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-orange-400 text-white"}`}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
