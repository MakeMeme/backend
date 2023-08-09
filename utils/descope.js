import DescopeClient from "@descope/node-sdk";

const descopeClient = DescopeClient({ projectId: process.env.PROJECT_ID });

module.exports = descopeClient;
