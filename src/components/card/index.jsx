export default function Card() {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-lg p-6 shadow-md transition hover:shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img src="https://cdn2.steamgriddb.com/icon/4f18f486a356810b3ef8008243bcba7a.png" alt="picture" className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold">User Name</h2>
                    <p className="text-gray-500 text-lg sm:text-xl font-medium">User Major</p>
                </div>
            </div>
            <p className="my-4 text-gray-700 font-semibold text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iste odit tempore eaque, modi officiis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:w-auto bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-700 transition rounded-md">Add Friend</button>
                <button className="w-full sm:w-auto border border-green-500 px-6 py-3 text-green-500 font-medium hover:bg-green-500 hover:text-white transition rounded-md">Send Message</button>
            </div>
        </div>
    );
}
