'use client';
import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { HiOutlineAtSymbol } from 'react-icons/hi';
import {
  AiOutlinePlus,
  AiOutlineFontSize,
  AiOutlineSmile,
  AiOutlineVideoCamera,
  AiOutlineAudio,
  AiOutlineEdit,
  AiOutlineSend,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'; // Import du composant EmojiPicker
import { useUserContext } from '@/app/utils/context';
import { getUserIndividuel, getWorkspaceByIdEquipe, getWorkspaceByIdIndividuel, sendMessage } from '@/app/utils/api/dataParticipant';

interface WorkspaceData {
  id: string;
}

const MessageInput: React.FC = () => {
  const user = useUserContext();
  const [message, setMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [showFontSizePicker, setShowFontSizePicker] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16); // Par défaut à 16px
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);
  const [underline, setUnderline] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null); // Stockez l'ID du workspace ici

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

  const handleSendMessage = async () => {
    if (message.trim() !== '' && workspaceId) {
      try {
        console.log('Message sent:', message);
        // Appel à la fonction sendMessage avec l'ID du workspace
        await sendMessage(workspaceId,message);
        setMessage(''); // Effacer l'entrée après l'envoi
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    console.log(emojiData);
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // Fonction pour appliquer les styles
  const applyStyles = () => {
    let styles = '';
    if (bold) styles += 'font-bold ';
    if (italic) styles += 'italic ';
    if (underline) styles += 'underline ';
    return styles.trim();
  };

  return (
    <div className="border-t p-4 w-full flex items-center space-x-4 bg-white">
      <button className="text-gray-400 hover:text-gray-600">
        <AiOutlinePlus className="h-6 w-6" />
      </button>

      <input
        type="text"
        placeholder="Envoyer un message dans le chat"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ${applyStyles()}`}
        style={{ fontSize: `${fontSize}px` }} // Utilisation de la taille de police sélectionnée
      />

      <div className="flex space-x-2 relative">
        {/* Boutons de mise en forme */}
        <button
          className={`text-gray-400 hover:text-gray-600 ${bold ? 'bg-gray-200' : ''}`}
          onClick={() => setBold(!bold)}
        >
          <AiOutlineBold className="h-6 w-6" />
        </button>

        <button
          className={`text-gray-400 hover:text-gray-600 ${italic ? 'bg-gray-200' : ''}`}
          onClick={() => setItalic(!italic)}
        >
          <AiOutlineItalic className="h-6 w-6" />
        </button>

        <button
          className={`text-gray-400 hover:text-gray-600 ${underline ? 'bg-gray-200' : ''}`}
          onClick={() => setUnderline(!underline)}
        >
          <AiOutlineUnderline className="h-6 w-6" />
        </button>

        {/* Sélecteur de taille de police */}
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setShowFontSizePicker(!showFontSizePicker)}
        >
          <AiOutlineFontSize className="h-6 w-6" />
        </button>

        {showFontSizePicker && (
          <div className="absolute bottom-14 left-24 transform -translate-x-1/2 bg-white border rounded shadow-lg p-2">
            {[12, 14, 16, 18, 20, 22, 24].map((size) => (
              <button
                key={size}
                onClick={() => {
                  setFontSize(size);
                  setShowFontSizePicker(false);
                }}
                className="block w-full text-left p-1 hover:bg-gray-100"
              >
                {size}px
              </button>
            ))}
          </div>
        )}

        {/* Sélecteur d'emojis */}
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <AiOutlineSmile className="h-6 w-6" />
        </button>

        {showEmojiPicker && (
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white border rounded shadow-lg">
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}

        {/* Autres boutons de fonctionnalités */}
        <button className="text-gray-400 hover:text-gray-600">
          <HiOutlineAtSymbol className="h-6 w-6" />
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          <FaCode className="h-6 w-6" />
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          <AiOutlineVideoCamera className="h-6 w-6" />
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          <AiOutlineAudio className="h-6 w-6" />
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          <AiOutlineEdit className="h-6 w-6" />
        </button>
      </div>

      <button
        className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
        onClick={handleSendMessage}
      >
        <AiOutlineSend className="h-6 w-6" />
      </button>
    </div>
  );
};

export default MessageInput;
