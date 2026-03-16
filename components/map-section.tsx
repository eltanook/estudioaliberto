"use client"

export function MapSection() {
  return (
    <section className="h-[400px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105077.09428940747!2d-58.50787752812488!3d-34.61569300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sus!4v1710000000000!5m2!1ses!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Estudio Jurídico Aliberto"
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
    </section>
  )
}
