/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => {
        console.error('❌ Bootstrap error:', err);

        // Messaggio di errore per l'utente
        document.body.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial;">
        <h2>⚠️ Errore di caricamento</h2>
        <p>Ricarica la pagina per riprovare.</p>
        <button onclick="location.reload()">🔄 Ricarica</button>
      </div>
    `;
    });