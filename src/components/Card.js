function Card({ title, children, className = '', center = true, ...props }) {
    return (
        <>
            <div className='bg-white rounded-xl'>
                <div className='p-2 px-4'>
                    <span className='font-semibold'>{title}</span>
                </div>
                <div className={ (center ? 'flex justify-center items-center' : '')+' h-60 ' + className }>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Card;