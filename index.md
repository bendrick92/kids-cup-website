---
layout: default
---

<section id="intro">
    <div class="background-image" style="background-image: url('uploads/golf_course.jpg');"></div>
    <section id="intro-content">
        <img class="icon" src="assets/images/kids_cup_logo.png">
        <h1 class="title">Kid's Cup Rochester</h1>
    </section>
</section>
<section id="event-details" class="has-light-gray-background">
    <div class="container">
        <div class="item flex-100">
            <h3 class="is-center-aligned is-section-heading">Next Event</h3>
        </div>
        <div class="item flex-50 is-center-aligned">
            <span class="fa fa-calendar fa-2x is-icon"></span>
            <h4>Date & Time</h4>
            <p>
                {{ site.next_event.date }}
                <br>
                {{ site.next_event.time }}
            </p>
        </div>
        <div class="item flex-50 is-center-aligned">
            <span class="fa fa-map-marker fa-2x is-icon"></span>
            <h4>Location</h4>
            <p>
                Somerby Golf Club
                <br>
                (<a href="{{ site.next_event.directions_url }}" target="_blank">Directions</a>)
            </p>
        </div>
    </div>
</section>
<section id="who-we-are">
    <div class="container">
        <div class="item flex-100">
            <h3 class="is-center-aligned is-section-heading">Who We Are</h3>
            <img class="is-floated-right flex-50" src="{{ site.baseurl }}{{ site.who_we_are.image }}" />
            {{ site.who_we_are.content }}
        </div>
    </div>
</section>
<section id="what-makes-us-unique" class="has-light-gray-background">
    <div class="container">
        <div class="item flex-100">
            <h3 class="is-center-aligned is-section-heading">What Makes Us Unique</h3>
            <img class="is-floated-right flex-50" src="uploads/golf_cart_1.jpg" />
            <p>For 22 years our golfers have been raising money for the kids.  Just to play, the golfers have to raise a minimum of $500.  Many of our golfers go above and beyond the required $500 and raise up to $6,000 a year.</p>
            <p>When you are asked to donate to a Kid’s Cup golfer, keep in mind you are donating to fund a project or product that is NOT in the hospitals’ budget.  The entire purpose and mission of our tournament is to make an impact on these children’s stay at the hospital, not only for the patients but for their parents and siblings.  They are generally lengthy stays, and the money raised goes to make these stays more tolerable and comfortable.</p>
            <p>Over the years, the projects at Mayo Clinic have included:</p>
            <ul>
                <li>Cast room pictures printer</li>
                <li>Marking milestones in the Neonatal NICU</li>
                <li>iPads</li>
                <li>Sibling support bags</li>
                <li>Shaken baby syndrome prevention program</li>
                <li>Equipment for PMR Med Peds</li>
                <li>Wild Encounters ZooMobile</li>
                <li>NICU stay-cations</li>
                <li>Fingerprint charms</li>
                <li>Sensory Music and Push Button Toys</li>
                <li>Simulation dolls</li>
                <li>Devices to ease blood draws</li>
            </ul>
            <p>In 2011, a project called “Beads of Courage” was funded at Mayo Clinic.  Beads of Courage are handed to each child who has any type of procedure whether it is a needle stick all the way to a successful day of chemotherapy.  Just imagine how many beads these kids collect over their time or trips to the hospital.  With each visit, the strings of courage beads get longer, and each bead garners a smile on a hurting or ill child.</p>
            <p>With so many children wanting to share, here is Erik Sutter's story of how just one project funded by Kid's Cup impacted him while being treated for cancer:</p>
            <blockquote>
                <p>While I was in the hospital, Kid's Cup helped by providing fun things to pass the time.  I spent a lot of time playing Mario Kart on the Nintendo Wii.  I also played fun games on a laptop computer.  My mom found the laptop very useful for setting up my Caring Bridge site to keep family and friends informed about my cancer.</p>
                <p>During my first 18 days in the hospital, getting out of bed and walking was important for my health.  A trip down the hall to the playroom was something to look forward to.  I was impressed with all the activities the playroom had to offer.</p>
                <p>Throughout the three years and two months of treatment, I was able to collect 295 colorful glass beads known as Beads of Courage.  Each bead represents a procedure or situation I had to go through.  I was proud to wear them during clinic visits so other people could see what I had accomplished!</p>
                <p>The Kids Cup tournament is a fun way for adults and children to raise important funds so that kids like me can endure long days and long nights in the hospital.</p>
                <p>Thank you very much Kid's Cup!</p>
                <p><em>- Erik Sutter</em></p>
            </blockquote>
            <p>In 2012, Kid's Cup made the change from supporting Gillette Children's Hospital to Olmsted Medical Center so that all the funds could be used locally.  Knowing how important the OMC BirthCenter is to the communities in Southeastern Minnesota, Kid's Cup made the first major financial pledge of $150,000 to the Capital Campaign to construct the Women's Health Pavilion on the OMC Hospital campus.  Nearly 40% of all births in Olmsted County happen in the OMC BirthCenter.  Kid's Cup is recognized for its generous support outside of the OMC BirthCenter Nursery.</p>
        </div>
    </div>
</section>
<section id="whats-new">
    <div class="container">
        <div class="item flex-100">
            <h3 class="is-center-aligned is-section-heading">What's New for 2018</h3>
            <img class="is-floated-right flex-50" src="uploads/somerbys_course.jpg" />
            <p>The Kid’s Cup has followed the same format for 21 years, but this year we’ve decided to switch things up. Instead of 36 holes played at two different golf courses, the tournament will be held at <a href="http://www.somerby.com" target="_blank">Somerby Golf Club</a>, South East Minnesota’s premiere championship golf club, on May 21, 2018. The tournament will be 18 holes, leaving more time for our golfers to enjoy dinner, along with our silent auction.</p>
            <h5>Schedule of Events:</h5>
            <ul class="is-unbulleted-list">
                <li>9:30 AM - Registration and hot breakfast buffet</li>
                <li>11:00 AM - Shotgun start</li>
                <li>3:30 PM - Social hour and silent auction</li>
                <li>4:30 PM - Dinner (chef-carved prime rib) and awards</li>
            </ul>
        </div>
    </div>
</section>
<section id="sponsors" class="has-light-gray-background">
    <div class="container">
        <div class="item flex-100">
            <h3 class="is-center-aligned is-section-heading">Sponsors</h3>
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
            <h3 class="is-center-aligned is-section-heading">Sign Up</h3>
        </div>
        <div class="item flex-50 has-gutter is-center-aligned">
            <span class="fa fa-flag fa-2x is-icon"></span>
            <h4>For Golfers</h4>
            <p>Registration is easy. Simply create your fund easy page <a href="https://secure.ministrysync.com/ministrysync/event/website/home/?e=10087" target="_blank">here</a>. Once registered, you can direct potential donors to your site and share the link on Facebook and Twitter.  If you receive donations as cash or check, simply record the donations on your Fund Easy page, and bring the cash and checks to Somerby the day of the event.</p>
            <p><a class="is-button" href="https://secure.ministrysync.com/ministrysync/event/website/home/?e=10087" target="_blank">I want to golf!</a></p>
        </div>
        <div class="item flex-50 has-gutter is-center-aligned">
            <span class="fa fa-handshake-o fa-2x is-icon"></span>
            <h4>For Sponsors</h4>
            <p>We understand that not everyone is a golfer. However, there are sponsorship opportunities available, along with volunteer opportunities. For more information contact Jeff Jensen (<a href="mailto:jeff.jensen@expresspros.com?subject=Kid's Cup Rochester Sponsorship">jeff.jensen@expresspros.com</a>) or Marge Kelley (<a href="mailto:marge.kelley@expresspros.com?subject=Kid's Cup Rochester Sponsorship">marge.kelley@expresspros.com</a>).</p>
            <p><a class="is-button" href="mailto:marge.kelley@expresspros.com?subject=Kid's Cup Rochester Sponsorship">I want to sponsor!</a></p>
        </div>
    </div>
</section>