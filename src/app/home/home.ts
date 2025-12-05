import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  implements OnInit {
  bestsellers: MenuItem[] = [
    {
      id: 1,
      name: 'Chicken Inasal',
      price: 120.00,
      description: 'Tender chicken leg quarter marinated in calamansi, garlic, and annatto, grilled to smoky perfection.',
      imagePath: '/public/images/chicken-inasal-solo-fiesta.webp' // Fixed path
    },
    {
      id: 2,
      name: 'Pork BBQ',
      price: 85.00,
      description: 'Juicy pork skewers glazed in sweet-savory barbecue sauce, grilled over open flame.',
      imagePath: '/public/images/porkBBQ.webp' // Fixed path
    },
    {
      id: 3,
      name: 'Halo-Halo',
      price: 99.00,
      description: 'A refreshing Filipino dessert with crushed ice, sweet beans, leche flan, ube, and creamy milk.',
      imagePath: '/public/images/Halo-halo.png' // Fixed path
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  setupScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      document.querySelectorAll('.animate-slide-up').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }

  formatPrice(price: number): string {
    return `₱${price.toFixed(2)}`;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
