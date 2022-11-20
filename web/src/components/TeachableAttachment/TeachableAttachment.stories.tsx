// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TeachableAttachment> = (args) => {
//   return <TeachableAttachment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TeachableAttachment from './TeachableAttachment'

const sampleLessonText =
  '<h1><strong style="background-color: transparent; color: rgb(0, 0, 0);">REINO DE LOS MILAGROS - El camino del héroe</strong></h1><h2><strong style="background-color: transparent;"><em>¿Soy un héroe?</em></strong></h2><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Hay un momento en la&nbsp; vida de todos nosotros en el que nos damos cuenta de que es importante hacer un cambio, no te sientes bien contigo mismo ni con lo que te rodea y justo ese momento te lleva a emprender un proceso de desarrollo personal llamado “El camino del héroe”</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Este curso trata de sacar a los héroes de las películas de ficción y los sitúa en la vida cotidiana, haciéndonos ver que cualquiera de nosotros puede convertirse en héroe ya que es solo cuestión de actitud.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Cuando hablamos de héroes en nuestra sociedad, la primera idea o imagen que surge nuestra mente es, por ejemplo, la de un bombero salvando a una persona atrapada en un incendio, o la de un policía arriesgando su vida para proteger a los ciudadanos de la agresión de los delincuentes.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Por otra parte, el Séptimo Arte nos proporciona un sinfín de ejemplos en las figuras de sus interminables superhéroes, personajes idolatrados pero de hazañas inalcanzables.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Conocemos también a los héroes y heroínas protagonistas de fantásticas sagas literarias, interpretadas con gran éxito en el cine, como por ejemplo el Señor de los Anillos, la Historia interminable, el maravilloso Mago de Oz, o Alicia en el País de las Maravillas.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Incluso podemos remontarnos a la lejana y mítica antigüedad, e invocar el sagrado nombre de Heracles, enfrentándose al temible Cancerbero, el perro de tres cabezas que guardaba las puertas del Hades, o sea, del Inframundo.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Pero, ¿y en el mundo real, hoy día, aquí y ahora, en nuestra vida cotidiana, dónde hay un espacio para el héroe y su misión?</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">¡Esta es la pregunta que todos necesitamos respondernos! Podemos hallar una respuesta partiendo de esta sencilla reflexión:</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">El ser humano está dotado de un inmenso potencial de desarrollo, y sin embargo éste apenas se manifiesta… ¿Por qué?&nbsp;</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Nacimos para convertirnos en árboles grandes y frondosos a partir de una semilla que contenía toda la fuerza y la sabiduría de los ancestros que nos precedieron durante miles de años, con todo ese inmenso potencial en su seno.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Pero lo que ha sucedido en realidad es que nos hemos convertido, en pequeños y manejables bonsáis, una manifestación en miniatura de nuestra verdadera grandeza.</span></p><h2><br class="softbreak"><strong style="background-color: transparent; color: rgb(0, 0, 0);">Árboles y Bonsáis</strong></h2><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Esta metáfora ilustra perfectamente la tragedia resultante de nuestro propio proceso de condicionamiento; un proceso que por otra parte, podemos revertir para recuperar todo aquello que hemos perdido, es decir, nuestra autenticidad y todo el potencial aún latente asociado a ella.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">En todas las épocas el ser humano se ha enfrentado a esta disyuntiva: Ceder ante el peso del paradigma imperante y someterse a los dictados de la sociedad, renunciando a ser él mismo, o rebelarse y ser él mismo.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Como enseñó Joseph Campbell, gran divulgador del arquetipo del héroe desde la publicación de su libro&nbsp; El héroe de las mil caras en 1959:</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">“Tu deber auténtico es irte de la comunidad, de la sociedad, para encontrar tu bienaventuranza; rebelarte ante las cadenas con las que la sociedad te ata a las viejas formas; es seguir las huellas de tu propia Bienaventuranza, abandonar la casa, comenzar la jornada del Héroe. “</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Hace un siglo, el filósofo y escritor José Ortega y Gasset escribía estas memorables palabras sobre ser héroe:</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">&nbsp;“Ser héroe consiste en ser uno, uno mismo. Si nos resistimos a que la herencia, a que lo circunstante, nos impongan unas acciones determinadas, es que buscamos asentar en nosotros, y sólo en nosotros, el origen de nuestros actos,</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Cuando el héroe quiere, no son los antepasados en él o los usos del presente quienes quieren, sino él mismo. Y este querer ser él mismo es la heroicidad.”</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">En definitiva, ser Héroe es atreverse a ir más allá de todo lo que has sido hasta ahora para convertirte en la mejor versión de ti mismo. ¡Y nuestra mejor versión es la más auténtica!</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Ser un Verdadero Héroe</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">¿Y cuáles son las tres características que definen a un auténtico Héroe?</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">En primer lugar la Actitud: Es inconformista, y está siempre dispuesto a darse una nueva oportunidad para lograr la vida que siente que realmente merece, y por su propio esfuerzo se rescata a sí mismo del abismo de la mediocridad y la desesperación. Es un rebelde con Causa.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">En segundo lugar la Generosidad: Va más allá de su individualismo a la hora de plantear sus objetivos, y en sus Sueños busca lo mejor para sí mismo y para los demás. Está firmemente comprometido a dejar un mundo mejor que aquel que encontró cuando llegó.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">En tercer lugar la Humildad: Es muy consciente de sus logros, pero no desea el título de Héroe, simplemente acepta que otros le consideren como tal.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Los héroes de todas las épocas representan un modelo a imitar, difícil pero nunca inalcanzable, y siempre útil y necesario, especialmente en este momento incierto y crítico de nuestra historia como humanidad.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">“Los héroes son personas que han triunfado tras superar todas las limitaciones humanas, como guerreros, chamanes, sanadores, santos y sabios. Todos ellos han inspirado, protegido, servido e iluminado a otros, y sus vidas se alzan como monumentos al gran potencial que reside en todos y en cada uno de nosotros.”</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Hay tres preguntas que te invito a responderte para saber si ha llegado el momento de comenzar tu aventura, y convertirte en el héroe o la heroína de tu propia vida. Son las siguientes:</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">1ª) ¿Siento que puedo ir más allá de todo lo que he sido hasta este momento?</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">2ª) ¿Cuál sería mi gran contribución al mundo?</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">3ª) Cuando llegue el final de mi vida, ¿qué mensaje positivo deseo dar como enseñanza a los demás?</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">Cuando puedas responder a cada una de ellas, sin claridad y rotundidad, estarás recorriendo ya tu propio camino heroico.</span></p><p><br class="softbreak"><span style="background-color: transparent; color: rgb(0, 0, 0);">¡Ahora es tu turno!</span></p><p><br class="softbreak"></p>'

const sampleImage = 'https://cdn.fs.teachablecdn.com/MVz6Od8Qgm0y3DfMK1VQ'
const sampleVideo = 'https://cdn.fs.teachablecdn.com/gx1sFASVQb6t8jK7BCao'

export const generated: ComponentStory<typeof TeachableAttachment> = (args) => {
  return <TeachableAttachment {...args} />
}

export default {
  title: 'Components/TeachableAttachment',
  component: TeachableAttachment,
  args: {
    name: '1. ¿Soy un héroe?',
    kind: 'text',
    url: sampleImage,
    text: sampleLessonText,
  },
  argTypes: {
    kind: {
      control: 'select',
      options: [
        'text',
        'native_comments',
        'image',
        'video',
        'pdf',
        'quiz',
        'code_display',
        'code_embed',
        'upsell',
      ],
    },
    url: {
      options: ['image', 'video'],
      mapping: {
        image: sampleImage,
        video: sampleVideo,
      },
      control: {
        type: 'select',
        labels: {
          image: 'Sample Image',
          video: 'Sample Video',
        },
      },
    },
  },
} as ComponentMeta<typeof TeachableAttachment>
