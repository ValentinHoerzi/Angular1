# Angular Project with Backend

## Datenbank erstellen
Zuerst Apache und MySql mit Xampp starten. `employeedatabase` und `servicedatabase` Datenbanken in http://localhost/phpmyadmin/server_databases.php 
erstellen.

## Backend starten
```
cd Angular1\Backend
java -jar EmployeeMicroservice-0.1.jar
java -jar ServiceMicroservice-0.1.jar
```

## Datenbank befüllen
Datenbank mit `database_script.sql` befüllen.

## Angular starten
Zum `Angular1\angularproject` wechseln
`npm install` ausführen und danach `ng serve`. Browser zu `http://localhost:4200/` öffnen
