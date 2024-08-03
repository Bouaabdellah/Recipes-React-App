export const RecipeBox = ({ url, title }) => {
    return (
        <div className="relative cursor-pointer max-h-full max-w-full rounded-lg overflow-hidden">
            <div className="absolute bottom-2 md:bottom-4 text-[12px] md:text-[1rem] text-center w-full text-white z-10">{title}</div>
            <img src={url} alt={title} className="max-w-full object-cover" />
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.4)]"></div>
        </div>
    )
}