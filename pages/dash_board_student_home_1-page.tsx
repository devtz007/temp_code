import React, { useState } from 'react';

/* Import custom components */
import Buttons1pagePart from '@/pageParts/buttons_1-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_dash_board_student_home_1-page.module.scss';

/**
 * DashBoardStudentHome1Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @param props - Props for the component.
 * @param props.styles - Additional class names to customize the component's style.
 *
 * @example
 * Here's how to use the component:
 * ```tsx
 * <DashBoardStudentHome1Page className="custom-class" />
 * ```
 *
 * @returns The header section of the page.
 */

const DashBoardStudentHome1Page: React.FC = (): JSX.Element => {
  // State to track the selected index
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="dash_board_student_home_1_page">
      <div className={styles.dash_board_student_home_1_page__shape}>
        <div className="container_1">
          <div className="width_wrapper">
            
          </div>
        </div>
        <div className="container_1">
          <div className="width_wrapper">
            <Buttons1pagePart
              stylesP={{
                buttons_1_pagePart: {
                  justifyContent: 'flex-start',
                },
                buttons_1_pagePart__button: {
                  backgroundColor: 'var(--white-2)',
                  color: 'var(--black-1)',
                  active: {
                    backgroundColor: 'var(--teal-1)',
                    color: 'var(--white-1)',
                  },
                },
              }}
              info={{
                items: ['About', 'Reviews', 'Resume', 'Speciality'],
              }}
              callBackInfo={(index) => {
                setSelectedIndex(index);
                //console.log('Clicked button index:', index);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DashBoardStudentHome1Page.displayName = 'DashBoardStudentHome1Page';

export default DashBoardStudentHome1Page;
