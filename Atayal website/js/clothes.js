$(document).ready(function () {


    $("#imagePlaceholder").html("<img src='Images/group.jpeg'>");
    $("#headingPlaceholder").html("<h2>Atayal clothing</h2>");
    $("#textPlaceholder").html("<p>The main material used to make Atayal clothing is hemp, which is a light material similar to linen. Since the 20th century cotton and wool has also been used in clothing production. Red is the most commonly used colour due to its symbolization of blood, representing the vitality of life and keeping evil spirits away. Red is accented by flashes of blue, yellow black and white among other colours.</p>");



    $("#image1").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/group.jpeg'>");
        $("#headingPlaceholder").html("<h2>Atayal clothing</h2>");
        $("#textPlaceholder").html("<p>The main material used to make Atayal clothing is hemp, which is a light material similar to linen. Since the 20th century cotton and wool has also been used in clothing production. Red is the most commonly used colour due to its symbolization of blood, representing the vitality of life and keeping evil spirits away. Red is accented by flashes of blue, yellow black and white among other colours.</p>");
    })

    $("#image2").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/female.jpeg'>");
        $("#headingPlaceholder").html("<h2>Atayal Female Costume</h2>");
        $("#textPlaceholder").html("<p>For Atayal women, their costumes consist of a headband, headdress, long-sleeved Mandarin-style short jacket, skirt and leggings. The front of the Atayal shirts are often adorned with diamond shapes and the back embroidered with complex patterns. Legend says that these diamond shapes are eyes, which represent the protection given by ancestors.</p>");

    })

    $("#image3").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/male.jpeg'>");
        $("#headingPlaceholder").html("<h2>Atayal Male Costume</h2>");
        $("#textPlaceholder").html("<p>For Atayal men, their costumes consist of a headband, headdress, chest cover, vest over a sleeved-shirt, trousers and a sheath belt.</p>");

    })

    $("#image4").on("click", function () {

        $("#imagePlaceholder").html("<img src='Images/weaving.jpeg'>");
        $("#headingPlaceholder").html("<h2>Atayal weaving</h2>");
        $("#textPlaceholder").html("<p>Traditionally, weaving was an important aspect of life for atayal women as it determined their social status and competence. Women begin weaving at a very young age, using colourful hemp threads to create clothing items shown above. Atayal people have been able to promote their culture through selling items made from traditional weaving patterns and skills.</p>");

    })


    $("#image5").on("click", function () {
        $("#imagePlaceholder").html("<img src='Images/tattoos.jpeg'>");
        $("#headingPlaceholder").html("<h2>Facial tattoos</h2>");
        $("#textPlaceholder").html("<p>Facial tattoos are a mark of adulthood within Atayal society. They also represent beauty and protect the person from evil spirits by scaring them away. Atayal men gain their facial tattoos when they join hunting expeditions and atayal women gain their facial tattoos when they know how to weave. Atayal people believe that after their soles leave the human world and arrive at the ancestors place they will be recognized by the tattoos on their faces.</p>");

    })



})