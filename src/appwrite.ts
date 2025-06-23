import { Account, Client, Databases, Functions } from "appwrite";

const _projectId = "68528b89000628daa697"; // Appwrite Project ID
const _endpoint = "https://fra.cloud.appwrite.io/v1"; // Appwrite Endpoint

// Initialize the Appwrite client
const client = new Client();
client.setEndpoint(_endpoint).setProject(_projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
