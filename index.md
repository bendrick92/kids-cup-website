---
layout: default
---

<section id="carousel">
    <div id="intro-carousel">
        {% for image in site.carousel_images %}
            <div><img src="{{ site.baseurl }}{{ image }}" /></div>
        {% endfor %}
    </div>
</section>
<section id="about">
    <div class="container">
        <div class="item flex-100">
            <h2 class="is-center-aligned">About Kid's Cup</h2>
            <p>Starting in 2012, the money raised by our golfers and sponsors will be donated to Mayo Clinic Children's Center and Olmsted Medical Center supporting prenatal and new infant care.</p>
            <p>Over the past fifteen years, Kid's Cup golfers have raised just shy of a million dollars for Mayo Eugenio Litta Children’s Hospital in Rochester and Gillette Children's Specialty Healthcare Hospital in Saint Paul.</p>
            <p>The important dollars raised have gone to support pediatric transport stretchers and equipment, pediatric patient simulators, occupational and physical rehabilitation equipment and various family support initiatives and resources.</p>
        </div>
    </div>
</section>
<section id="sponsors">
    <div class="container">
        <div class="item flex-100">
            <h2>Sponsors</h2>
            <div class="container">
            {% for sponsor in site.sponsors %}
                <div class="item flex-33 flex-50-tablet">
                    <a href="{{ sponsor.link}}" target="_blank" class="item-overlay-link"></a>
                    <img src="{{ site.baseurl }}{{ sponsor.image }}" class="has-no-margins" />
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
</section>
<section id="sign-up">
    <div class="container">
        <div class="item flex-100">
            <h2>Sign Up</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula bibendum urna eget eleifend. Nunc consequat ornare lorem vel volutpat. Vestibulum convallis finibus diam, fringilla finibus arcu scelerisque pellentesque. Sed blandit, orci vitae fermentum lacinia, neque odio varius dui, vitae laoreet enim risus eget enim. Cras finibus sapien a odio consectetur tincidunt. Nullam sit amet laoreet ex. Aliquam erat volutpat. Sed tincidunt ac leo a venenatis. Nullam tellus risus, dignissim eu sodales in, faucibus in sem. Integer hendrerit ex vitae nulla imperdiet, quis sodales enim volutpat. Etiam eget tellus est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vitae sodales justo. Etiam consectetur feugiat tellus ut euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce finibus libero id libero egestas, at gravida mi scelerisque.</p>
            <p>Maecenas et pharetra velit. Aliquam erat volutpat. Nulla pellentesque sit amet neque et hendrerit. Vivamus leo nisi, posuere et porta at, maximus ac est. Nunc a justo turpis. Aliquam ultrices id velit et pretium. Sed ornare molestie ullamcorper. In aliquam sit amet massa feugiat efficitur. Duis a nulla varius, finibus nulla quis, porta ante. Sed suscipit malesuada interdum. Suspendisse potenti. Integer viverra venenatis tincidunt. Proin non tempor libero.</p>
            <p>Sed at suscipit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec pretium turpis. Nullam ultrices pharetra tellus in iaculis. Etiam rutrum dui non turpis congue, id commodo mi ullamcorper. Ut hendrerit elit non lobortis sodales. Aliquam placerat ligula imperdiet, dictum purus sagittis, dictum leo. Vivamus mattis vel quam iaculis cursus. Quisque congue risus et mi lobortis porttitor quis at mi. Duis cursus mi nec neque finibus porta.</p>
        </div>
    </div>
</section>