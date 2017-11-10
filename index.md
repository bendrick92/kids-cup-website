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
            <h2 class="is-center-aligned">About</h2>
            <p>Starting in 2012, the money raised by our golfers and sponsors will be donated to Mayo Clinic Children's Center and Olmsted Medical Center supporting prenatal and new infant care.</p>
            <p>Over the past fifteen years, Kid's Cup golfers have raised just shy of a million dollars for Mayo Eugenio Litta Children’s Hospital in Rochester and Gillette Children's Specialty Healthcare Hospital in Saint Paul.</p>
            <p class="has-margin-two-bottom">The important dollars raised have gone to support pediatric transport stretchers and equipment, pediatric patient simulators, occupational and physical rehabilitation equipment and various family support initiatives and resources.</p>
        </div>
    </div>
    <div id="about-details" class="container">
        <div class="item flex-50 is-center-aligned">
            <span class="fa fa-calendar fa-3x is-icon"></span>
            <h4>When</h4>
            <p class="has-no-margins">Monday, May 22, 2017</p>
            <p class="has-margin-two-bottom">6:00 AM - 7:30 PM</p>
        </div>
        <div class="item flex-50 is-center-aligned">
            <span class="fa fa-map-marker fa-3x is-icon"></span>
            <h4>Where</h4>
            <p class="has-no-margins">Willow Creek Golf Course</p>
            <p class="has-no-margins">48th Street SW</p>
            <p class="has-margin-two-bottom">Rochester, MN 55902</p>
        </div>
    </div>
</section>
<section id="sponsors" class="has-light-gray-background">
    <div class="container">
        <div class="item flex-100">
            <h2 class="is-center-aligned">Sponsors</h2>
        </div>
        {% for sponsor in site.sponsors %}
            <div class="item flex-33 flex-50-tablet has-padding-two has-gutter has-centered-content has-white-background">
                <a href="{{ sponsor.link}}" target="_blank" class="item-overlay-link"></a>
                <img src="{{ site.baseurl }}{{ sponsor.image }}" class="has-no-margins" />
            </div>
        {% endfor %}
    </div>
</section>
<section id="sign-up">
    <div class="container">
        <div class="item flex-100">
            <h2 class="is-center-aligned">Sign Up</h2>
        </div>
        <div class="item flex-50 has-gutter is-center-aligned">
            <span class="fa fa-flag fa-3x is-icon"></span>
            <h4>For Golfers</h4>
            <p>This is some text to describe the sign up section for golfers.</p>
            <a class="is-button has-margin-one-bottom">I want to golf!</a>
        </div>
        <div class="item flex-50 has-gutter is-center-aligned">
            <span class="fa fa-handshake-o fa-3x is-icon"></span>
            <h4>For Sponsors</h4>
            <p>This is some text to describe the sign up section for sponsors.</p>
            <a class="is-button has-margin-one-bottom">I want to sponsor!</a>
        </div>
    </div>
</section>