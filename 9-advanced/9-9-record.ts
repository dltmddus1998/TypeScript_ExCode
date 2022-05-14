type PageInfo = {
    title: string;
}
type Page = 'home' | 'about' | 'contact';

// key: Page, Value: PageInfo
const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
}

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'