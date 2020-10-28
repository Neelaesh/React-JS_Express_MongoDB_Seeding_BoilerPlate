FROM mongo
COPY init.json init.json
CMD mongoimport --host mongodb --db employees --collection employeeDetails --type json --file /init.json --jsonArray
