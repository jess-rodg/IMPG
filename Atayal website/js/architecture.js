$(document).ready(function () {

        $("#imagePlaceholder").html("<img src='Images/house.jpeg'>");
        $("#headingPlaceholder").html("<h2>Family home</h2>");
        $("#textPlaceholder").html("<p>The Atayal are widespread across Taiwan and have developed different building styles in different areas. Family houses are often built half into the ground in order to protect them from wind and typhoons.</p>");
    

    $("#image1").on("click", function () {

            $("#imagePlaceholder").html("<img src='Images/house.jpeg'>");
            $("#headingPlaceholder").html("<h2>Family home</h2>");
            $("#textPlaceholder").html("<p>The Atayal are widespread across Taiwan and have developed different building styles in different areas. Family houses are often built half into the ground in order to protect them from wind and typhoons.</p>");
    
    })

    $("#image2").on("click", function () {

            $("#imagePlaceholder").html("<img src='Images/walls.jpeg'>");
            $("#headingPlaceholder").html("<h2>Wall structure of Atayal Home</h2>");
            $("#textPlaceholder").html("<p>Common building materials include wood and bamboo, with the bamboo style being developed due to easy erection after migration to different areas. Atayal homes don<q>t follow standard sizing and instead depend on the physique of the man of the house, with building measurements depending on the length of the man's arm.</p>");
        
    
      
    })

    $("#image3").on("click", function () {

            $("#imagePlaceholder").html("<img src='Images/interior.png'>");
            $("#headingPlaceholder").html("<h2>Interior of 1900 Atayal Home</h2>");
            $("#textPlaceholder").html("<p>The interior of each Atayal family home is similar across all areas of taiwan. The walls are made of stacks of slates and wooden boards are used as pillars to hold the slates in.</p>");
    
    })

    $("#image4").on("click", function () {

            $("#imagePlaceholder").html("<img src='Images/watchtower.png'>");
            $("#headingPlaceholder").html("<h2>Watchtower</h2>");
            $("#textPlaceholder").html("<p>Another building seen in all atayal villages is the watchtower. The watchtower is an elevated building which allows the tribe to look out across the environment. Originally this was used as a defence tool, but later became a place for gatherings, meetings and recreational activities.</p>");

    })

    $("#image5").on("click", function () {
    
            $("#imagePlaceholder").html("<img src='Images/barn.png'>");
            $("#headingPlaceholder").html("<h2>Barn</h2>");
            $("#textPlaceholder").html("<p>The barn is used to store the family<q>s food supplies, storing foxtail millet, corn, sweet potatoes and taro, among other foods. Barns are mostly elevated off the floor to protect the food from moisture and rodents.</p>");
    })

})