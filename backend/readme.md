
# Virtual Pet Adoption Center Backend

- Implemented API Endpoints
 
    # Add a New Pet  
    ![Add a New Pet POSTMAN output](https://i.ibb.co/Q3Ww2DX7/Untitled.png)
    - [x]  URL: POST /pets 
    - [x]  Input: JSON object with name, species, age, and personality.
    - [x]  Output: Created pet object with an auto-generated id.

    # View All Pets 
    ![View All Pets POSTMAN output](https://i.ibb.co/XZMfDXgx/Screenshot-2025-05-03-135555.png)
    - [x]  URL: GET /pets  
    - [x]  Output: List of all pets, including their current mood and adoption status.

    # View a Single Pet   
    ![View a Single Pet POSTMAN output](https://i.ibb.co/ds30DghC/3.png)
    - [x]  URL: GET /pets/:id  
    - [x]  Output: Pet object with the specified id. 

    # Update a Pet’s Profile  
    ![Update a Pet’s Profile POSTMAN output](https://i.ibb.co/wrQYXX5f/4.png)
    - [x]  URL: PUT /pets/:id  
    - [x]  Input: JSON object with updated fields (name, species, age, personality). 
    - [x]  Output: Updated pet object.

    # Adopt a Pet    
    ![Adopt a Pet POSTMAN output](https://i.ibb.co/9mTx0VCB/5.png)
    - [x]  URL: PATCH /pets/:id/adopt 
    - [x]  Action: Mark the pet as adopted (adopted = true) and set the adoption_date. 
    - [x]  Output: Success message or updated pet object.

    # Delete a Pet    
    ![Delete a Pet POSTMAN output](https://i.ibb.co/xtsFqZ2S/6.png)
    - [x]  URL: DELETE /pets/:id  
    - [x]  Output: Success message. 

    # Filter Pets by Mood      
    ![Filter Pets by Mood POSTMAN output](https://i.ibb.co/dwgkG5wz/7.png)
    - [x]  URL: GET /pets/filter?mood=<mood>  
    - [x]  Output: List of pets matching the specified mood. 

