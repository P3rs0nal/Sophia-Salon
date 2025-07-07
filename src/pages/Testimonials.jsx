import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { quote: 'Sophia did an amazing job on my nails!', name: 'Jane D.' },
  { quote: 'Love my custom nail art – lasted weeks!', name: 'Maria S.' },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-heading mb-8 text-center">Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <blockquote className="text-center p-6 bg-white rounded-lg shadow">
              <p className="mb-4">“{t.quote}”</p>
              <footer className="font-semibold">— {t.name}</footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
