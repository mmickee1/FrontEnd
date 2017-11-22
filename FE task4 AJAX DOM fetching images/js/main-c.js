'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = () => {
    const ul = document.querySelector('ul');

    fetch('images.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.forEach((image) => {
                //put code here
                const li = document.createElement('li');
                const figure = document.createElement('figure');
                const a = document.createElement('a');
                const figcaption = document.createElement('figcaption');
                const h3 = document.createElement('h3');
                const img = document.createElement('img');

                const headline = document.createTextNode(image.mediaTitle);

                h3.appendChild(headline);
                figcaption.appendChild(h3);

                img.setAttribute('src', `img/thumbs/${image.mediaUrl}`);
                a.setAttribute('href', `img/original/${image.mediaUrl}`);

                a.appendChild(img);
                figure.appendChild(a);
                figure.appendChild(figcaption);
                li.appendChild(figure);
                ul.appendChild(li);

            });
        });
};

showImages();