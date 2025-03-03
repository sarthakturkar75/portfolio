// Utility function to create an element with attributes and innerHTML
function createEl(tag, attrs = {}, innerHTML = '') {
  const el = document.createElement(tag);
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
  el.innerHTML = innerHTML;
  return el;
}

// Create Navigation
function createNav() {
  const nav = createEl('nav', { class: 'navbar' });
  const logo = createEl('div', { class: 'logo' }, 'Your Name');
  const navList = createEl('ul', { class: 'nav-links' });
  const sections = ['Home', 'About', 'Projects', 'Services', 'Activities', 'Testimonials', 'Blog', 'Resume', 'Contact'];
  sections.forEach(section => {
    const li = createEl('li');
    const a = createEl('a', { href: `#${section.toLowerCase()}` }, section);
    li.appendChild(a);
    navList.appendChild(li);
  });
  const themeToggle = createEl('button', { id: 'toggle-theme', class: 'theme-toggle' }, '<i class="fas fa-adjust"></i>');
  nav.appendChild(logo);
  nav.appendChild(navList);
  nav.appendChild(themeToggle);
  return nav;
}

// Create a Section with a title and content
function createSection(id, title, contentHTML) {
  const section = createEl('section', { id: id });
  if (title) {
    const h2 = createEl('h2', {}, title);
    section.appendChild(h2);
  }
  const content = createEl('div', { class: 'section-content' }, contentHTML);
  section.appendChild(content);
  return section;
}

// Home Section
function homeSection() {
  const contentHTML = `
    <div class="home-content">
      <h1>Welcome to My Portfolio</h1>
      <h2>Graphic Designer & Creative Visionary</h2>
      <p>Discover my work and passion for design through a sleek, refined experience.</p>
    </div>
  `;
  const section = createSection('home', '', contentHTML);
  section.classList.add('home-section');
  return section;
}

// About Section with Timeline
function aboutSection() {
  const timelineItems = [
    { year: '2018', desc: "Bachelor's in Graphic Design" },
    { year: '2019', desc: "Joined Creative Agency" },
    { year: '2020', desc: "Freelance Branding Specialist" }
  ];
  let timelineHTML = '<div class="timeline">';
  timelineItems.forEach((item, i) => {
    timelineHTML += `<div class="timeline-item ${i % 2 === 0 ? 'left' : 'right'}">
                       <h3>${item.year}</h3>
                       <p>${item.desc}</p>
                     </div>`;
  });
  timelineHTML += '</div>';
  return createSection('about', 'About Me', `<p>My journey in design is fueled by creativity and innovation.</p>${timelineHTML}`);
}

// Projects Section
function projectsSection() {
  const projects = [
    { title: 'Project One', img: 'images/project1.jpg', desc: 'A premium visual identity project.' },
    { title: 'Project Two', img: 'images/project2.jpg', desc: 'A refined redesign with attention to detail.' }
  ];
  let projectsHTML = '<div class="projects-grid">';
  projects.forEach((proj, index) => {
    projectsHTML += `<div class="project-card" data-index="${index}">
                       <img src="${proj.img}" alt="${proj.title}">
                       <div class="project-overlay">
                         <h3>${proj.title}</h3>
                       </div>
                     </div>`;
  });
  projectsHTML += '</div>';
  return createSection('projects', 'Projects', projectsHTML);
}

// New Services Section
function servicesSection() {
  const services = [
    { title: 'UI/UX Design', img: 'images/service1.jpg', desc: 'Creating intuitive and engaging user interfaces.' },
    { title: 'Brand Identity', img: 'images/service1.jpg', desc: 'Building cohesive visual branding and strategy.' },
    { title: 'Illustration', img: 'images/service1.jpg', desc: 'Custom illustrations that communicate your story.' }
  ];
  let servicesHTML = '<div class="services-grid">';
  services.forEach(service => {
    servicesHTML += `<div class="service-card">
                       <img src="${service.img}" alt="${service.title}">
                       <div class="service-content">
                         <h3>${service.title}</h3>
                         <p>${service.desc}</p>
                       </div>
                     </div>`;
  });
  servicesHTML += '</div>';
  return createSection('services', 'Services', servicesHTML);
}

// Activities Section
function activitiesSection() {
  const activities = [
    { icon: 'fa-trophy', title: 'Award Winner', desc: 'Best Design Award 2021' },
    { icon: 'fa-certificate', title: 'Certified Designer', desc: 'Adobe Certified Expert' }
  ];
  let activitiesHTML = '<div class="activities-grid">';
  activities.forEach(act => {
    activitiesHTML += `<div class="activity-card">
                         <i class="fas ${act.icon}"></i>
                         <h3>${act.title}</h3>
                         <p>${act.desc}</p>
                       </div>`;
  });
  activitiesHTML += '</div>';
  return createSection('activities', 'Activities', activitiesHTML);
}

// New Testimonials Section
function testimonialsSection() {
  const testimonials = [
    { name: 'Client A', photo: 'images/testimonial1.jpg', quote: 'An exceptional designer who delivers beyond expectations.' },
    { name: 'Client B', photo: 'images/testimonial1.jpg', quote: 'Innovative, professional, and creative – highly recommended.' }
  ];
  let testimonialHTML = '<div class="testimonials-slider">';
  testimonials.forEach(testimonial => {
    testimonialHTML += `<div class="testimonial">
                          <img src="${testimonial.photo}" alt="${testimonial.name}">
                          <p>"${testimonial.quote}"</p>
                          <h4>${testimonial.name}</h4>
                        </div>`;
  });
  testimonialHTML += '</div>';
  return createSection('testimonials', 'Testimonials', testimonialHTML);
}

// Blog Section
function blogSection() {
  const posts = [
    { title: 'Design Inspirations', excerpt: 'Insights on design trends and inspirations.', link: '#' },
    { title: 'Creative Process', excerpt: 'Exploring the art behind my design workflow.', link: '#' }
  ];
  let blogHTML = '<div class="blog-posts">';
  posts.forEach(post => {
    blogHTML += `<div class="blog-post">
                   <h3>${post.title}</h3>
                   <p>${post.excerpt}</p>
                   <a href="${post.link}">Read More</a>
                 </div>`;
  });
  blogHTML += '</div>';
  return createSection('blog', 'Blog', blogHTML);
}

// Resume Section
function resumeSection() {
  const resumeHTML = `<a href="resume.pdf" class="btn" download>Download Resume (PDF)</a>`;
  return createSection('resume', 'Resume', resumeHTML);
}

// Contact Section
function contactSection() {
  const contactHTML = `
    <form id="contact-form">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div class="social-links">
      <a href="https://github.com/yourusername" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/yourusername" target="_blank"><i class="fab fa-twitter"></i></a>
    </div>
  `;
  return createSection('contact', 'Contact', contactHTML);
}

// Render the entire app into #app
function renderApp() {
  const app = document.getElementById('app');
  app.appendChild(createNav());
  app.appendChild(homeSection());
  app.appendChild(aboutSection());
  app.appendChild(projectsSection());
  app.appendChild(servicesSection());
  app.appendChild(activitiesSection());
  app.appendChild(testimonialsSection());
  app.appendChild(blogSection());
  app.appendChild(resumeSection());
  app.appendChild(contactSection());
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initAnimations();
  initProjectModal();
  initContactForm();
  initThemeToggle();
  initSmoothScroll();
});

// Scroll Animations via Intersection Observer
function initAnimations() {
  const sections = document.querySelectorAll('section');
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));
}

// Project Modal Functionality
function initProjectModal() {
  const projectsData = [
    { title: 'Project One', desc: 'A premium visual identity project.', img: 'images/project1.jpg' },
    { title: 'Project Two', desc: 'A refined redesign with attention to detail.', img: 'images/project2.jpg' }
  ];
  const modal = createEl('div', { id: 'project-modal', class: 'project-modal' });
  const modalContent = createEl('div', { class: 'project-modal-content' });
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      const proj = projectsData[index];
      modalContent.innerHTML = `<span id="close-modal">&times;</span>
                                <h2>${proj.title}</h2>
                                <img src="${proj.img}" alt="${proj.title}">
                                <p>${proj.desc}</p>`;
      modal.style.display = 'flex';
      document.getElementById('close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Contact Form Submission (Dummy Handler)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      form.reset();
    });
  }
}

// Theme Toggle Functionality
function initThemeToggle() {
  const toggle = document.getElementById('toggle-theme');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
