
import { STRAPI_BASE_URL } from "@/lib/strapi";
import Link from "next/link";

const styles = {
    header: "relative h-[600px] overflow-hidden",
    backgroundImage: "absolute inset-0 object-cover w-full h-full",
    overlay: "relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4",
    heading: "text-4xl md:text-6xl font-bold mb-4 lg:text-2xl",
    button: "mt-8 inline-flex items-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 transition-colors" ,
}

export function HeroSection({data}:{readonly data:{ heading:string, subHeading:string, link:{href:string, label:string}, image:{url:string, alternativeText:string}} | null}) {
    if(!data) return null;

    const {heading, subHeading, link} = data;
    const imageUrl = data.image?.url.startsWith("http") ? data.image.url : `${STRAPI_BASE_URL}${data.image?.url}`;

    return (
        <header className={styles.header}>
            <img
                alt="Background"
                className={styles.backgroundImage}
                height={1080}
                src={imageUrl}
                style={{
                    aspectRatio:"1920/1080",
                    objectFit:"cover",
                }}
                width={1920}
            />
            <div className={styles.overlay}>
                <h1 className={styles.heading}>{heading}</h1>
                <p className="text-lg md:text-2xl lg:text-base">{subHeading}</p>
                <Link href={link.href} className={styles.button}>{link.label}</Link>
            </div>
        </header>
    )
}