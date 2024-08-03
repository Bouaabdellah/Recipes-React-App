export const Container = ({ children }) => {
    return (
        <div className="mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px] px-[15px]">
            {children}
        </div>
    )
}