import Button from '../components/Button'

const DottedPage = () => {
    return (
        <div className="h-screen w-full bg-neutral-900 flex items-center justify-center"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px , rgba(6 , 182,212,0.2) 1px , transparent 0 )`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat"

            }}
        >
            <Button />
        </div>
    )
}

export default DottedPage
