"use client";
import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMessage from './ChatMessage/ChatMessage';
import MessageInput from './MessageInput/MessageInput';
import { useUserContext } from '@/app/utils/context';
import { getAllMessageByWorkspaceId, getUserIndividuel, getWorkspaceByIdEquipe, getWorkspaceByIdIndividuel } from '@/app/utils/api/dataParticipant';

interface Message {
  id: number;
  contenu: string;
  created_at: string;
}

const ChatPage: React.FC = () => {
  const user = useUserContext();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !user.id) {
        console.log('User not loaded or user ID is undefined');
        setIsError(true);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const result1 = await getUserIndividuel(user.id);
        console.log('Result from getUserIndividuel: ', result1.participation_type);

        if (result1 && result1.id) {
          if (result1.participation_type === 'solo') {
            const result = await getWorkspaceByIdIndividuel(result1.id);
            console.log('Result from getWorkspaceByIdIndividuel: ', result);
            setWorkspaceId(result[0].id); // Assurez-vous d'accéder à l'ID du premier élément
          } else if (result1.participation_type === 'equipe') {
            const result = await getWorkspaceByIdEquipe(result1.id);
            console.log('Result from getWorkspaceByIdEquipe: ', result);
            setWorkspaceId(result[0].id); // Assurez-vous d'accéder à l'ID du premier élément
          } else {
            console.log('No valid participation_type found in result1');
            setIsError(true);
          }
        } else {
          console.log('No id found in result1');
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (workspaceId) {
        try {
          const fetchedMessages = await getAllMessageByWorkspaceId(workspaceId);
          setMessages(fetchedMessages);
        } catch (error) {
          console.error('Error fetching messages:', error);
          setIsError(true);
        }
      }
    };

    fetchMessages();
  }, [workspaceId]);

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Affichage de l'en-tête seulement s'il n'y a pas de messages */}
      {messages.length === 0 && !isLoading && !isError && <ChatHeader />}

      <div className="flex-1 mt-6 overflow-y-auto">
        {/* Gestion des différents états */}
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">Loading...</p>
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-red-500 text-lg">Error loading messages.</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                username="Unknown" // Remplace par l'utilisateur réel si disponible
                message={message.contenu}
                time={new Date(message.created_at).toLocaleTimeString()} // Formatage de la date
              />
            ))}
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatPage;
