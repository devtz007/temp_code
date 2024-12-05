
/* Import custom components*/
import TutorDetailCard1PagePart from '@/pageParts/tutor_detail_card_1-pagePart';
import TutorCards3PagePart from '@/pageParts/person_cards_3-pagePar';
import BookLessonCard1PagePart from '@/pageParts/book_lesson_card_1-pagePart';
import IntroVideo1PagePart from '@/pageParts/intro_video_1-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_tutor_detail_1-page.module.scss';

/**
 * TutorDetail1Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @param props - Props for the component.
 * @example
 * Here's how to use the component:
 * ```tsx
 * <TutorDetail1Page className="custom-class" />
 * ```
 *
 * @returns The header section of the page.
 */

const TutorDetail1Page: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={`${styles.tutor_detail_1_page}`}>
      <div className={`${styles.tutor_detail_1_page__shape}`}></div>
      <div
        className={`${styles.tutor_detail_1_page__width_wrapper} width_wrapper`}
      >
        <div className={`${styles.tutor_detail_1_page__width_wrapper__col1}`}>
          <TutorDetailCard1PagePart />
          <TutorCards3PagePart
            stylesP={{
              tutor_cards_3_pagePart: {
                padding: '40px 0',            
              },
            }}
          />
          
        </div>
        <div className={`${styles.tutor_detail_1_page__width_wrapper__col2}`}>
          <BookLessonCard1PagePart
            info={{
              lessonCount: 10,
              price: 200,
              bookings: 5,
              contacts: 3,
              time: 'Updated 10 minutes ago',
            }}
          />
          <IntroVideo1PagePart />
        </div>
      </div>
    </div>
  );
};

/* Define data type of props */
interface Props {
  props?: string;
}

// Setting displayName for better debugging and searching
TutorDetail1Page.displayName = 'TutorDetail1Page';

export default TutorDetail1Page;
