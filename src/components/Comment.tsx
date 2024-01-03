import styles from './Comment.module.css';

interface CommentProps {
    image: string;
    name: string;
    comment: string | JSX.Element[];
    position: 'left' | 'right';
}

export default function Comment({ image, name, comment, position }: CommentProps) {

    return (
        <div className={`relative ${styles.comment}`}>
            <div className={`bg-white p-1 rounded-t-full rounded-br-full flex justify-center items-center content-center hover:scale-[1.2] transition-all relative`}>
                <div className="rounded-full w-16 h-16 md:w-20 md:h-20" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            </div>
            <div className={`hidden absolute top-0 ${position==='right' ? '-right-[370px] md:-right-[520px]' : '-left-[370px] md:-left-[520px]'} bg-white p-4 w-[350px] md:w-[500px] rounded-lg ${styles.comment_body}`}>
                <div className="content-small">{name}</div>
                <p className="font-primary -left-1 content-small font-light whitespace-pre-line">{comment}</p>
            </div>
        </div>
    )
}