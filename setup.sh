mongo cropdb --eval "db.dropDatabase()" 
mongoimport -d cropdb -c users --file data/users.json
mongoimport -d cropdb -c crops --file data/crops.json