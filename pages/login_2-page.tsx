/* Import custom components*/
import Login2PagePart from '@/pageParts/login_2-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_login_2-page.module.scss';

/**
 * Login2Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @param props - Props for the component.
 * @example
 * Here's how to use the component:
 * ```tsx
 * <Login2Page className="custom-class" />
 * ```
 *
 * @returns The header section of the page.
 */

const Login2Page: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={`${styles.login_2_page}`}>
      <div className={`${styles.login_2_page__my_container_1} my_container_1`}>
        <Login2PagePart />
        <div
          className={`${styles.login_2_page__my_container_1__image_container_2} image_container_2`}
        >
          <img
            src="/src/assets/media/pageParts/login_2-pagePart/login.png"
            alt="login image"
          />
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
Login2Page.displayName = 'Login2Page';

export default Login2Page;
