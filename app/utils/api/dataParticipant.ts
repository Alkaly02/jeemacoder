import { api_url } from "./api_url";


let authToken = null;
if (typeof window !== "undefined") {
    authToken = localStorage.getItem('authToken');
}
export const getUserHackathon = async (Hackathon_id : string) => {
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(`${api_url}/hackathon/recup/${Hackathon_id}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('hackathons:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err; // Rethrow the error so react-query can handle it
    }
};

export const getUserIndividuel = async (Individuel_id : string) => {
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(`${api_url}/hackathon/recup/by_user_id/${Individuel_id}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log('hackathons:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err; // Rethrow the error so react-query can handle it
    }
};
export const getCurrentCreatedEquipe = async () => {
    try {
        const response = await fetch(`${api_url}/equipe/indexByEquipeDesc`, {
            method: 'GET',
            headers : {
                "Authorisation" : `Bearer ${authToken}`
            }
        })
        const data = await response.json()
        return data
    }catch(error) {
        console.error("fetch failed", error);
        throw error
    }
}

export const sendMessage = async (workspaceId: string, messageContent: string) => {
    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ contenu: messageContent }) // Envoi du contenu du message
    };
    try {
        const response = await fetch(`${api_url}/sendMessage_in/${workspaceId}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('sendMessage:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};



export const getAllMessageByWorkspaceId = async (Workspace_id : string) => {
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(`${api_url}/all_messages/${Workspace_id}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('AllMessageByWorkspaceId:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};

export const getWorkspaceByIdIndividuel = async (Individu_id : string) => {
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(`${api_url}/indiv/workspace/indexByIdIndividuel/${Individu_id}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('WorkspaceByIdIndividuel:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};

export const getWorkspaceByIdEquipe = async (Equipe_id : string) => {
    const options = {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(`${api_url}/indiv/workspace/indexByIdEquipe/${Equipe_id}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('WorkspaceByIdEquipe:', data);
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
};