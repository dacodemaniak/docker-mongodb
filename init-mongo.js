db.createUser(
	{
		user: "sysmgadm",
		pwd: "5y54Dm1",
		roles: [ 
			{ role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" 
		]
	}
);

db.createUser(
    {
        "user" : "easystockMngr",
        "pwd": "@Mn6GeR#",
        "roles" : [
            {
                "role": "dbOwner", "db": "easystock"
            }, 
            { 
                "role" : "readWrite", 
                "db" : "easystock" 
            } 
        ] 
    } 
);
