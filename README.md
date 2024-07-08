# Progetto di Analisi dei Dati Sanitari

## Descrizione

Questo progetto facilita la comunicazione tra utenti e amministratori per l'analisi dei dati sanitari. Gli utenti possono inviare i dati tramite una GUI utente mobile, mentre gli amministratori possono visualizzare questi dati tramite una GUI PC amministratore. Il progetto è sviluppato su piattaforme Windows e web-based utilizzando Angular, Node.js, Firestore/Firebase, MongoDB/MySQL e PHP.

## Struttura del Progetto


health-data-analysis/
│
├── admin-gui/
├── user-gui/
├── backend/
├── database/
└── README.md


## Installazione

### Prerequisiti

- Node.js e npm
- Angular CLI
- Firebase CLI
- MongoDB
- MySQL

### Configurazione

1. **Installare le dipendenze**

   ```bash
   cd admin-gui
   npm install
   cd ../user-gui
   npm install
   cd ../backend
   npm install


Avviare i servizi

MongoDB
MySQL
Avviare il backend

cd backend
node src/index.js

Avviare le interfacce

cd admin-gui
ng serve
cd ../user-gui
ng serve


Utilizzo
Accedere alla GUI dell'amministratore per visualizzare i dati sanitari inviati dagli utenti e gestire le notifiche. Utilizzare la GUI utente per inviare i dati sanitari e ricevere notifiche in caso di superamento delle soglie predefinite.




