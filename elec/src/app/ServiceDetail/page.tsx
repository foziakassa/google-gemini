export default function ServiceDetail(){
    return(
        <div className="">
            <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
    <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">Services</div>

    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div className="lg:w-[50%] xs:w-full">
        <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
      </div>
      <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>
        <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
          veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
          sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
          nobis tempora possimus ullam!</p>
      </div>
    </div>
    {/* <!-- col-2 --> */}
    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
      {/* <!--  --> */}
      <div className="md:hidden sm:block xs:block xs:w-full">
        <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
      </div>
      {/* <!--  --> */}
      <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>

        <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
          veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
          sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
          nobis tempora possimus ullam!</p>
      </div>
      {/* <!--  --> */}
      <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
        <img className="lg:rounded-t-lg xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
      </div>
    </div>
  </section>

  {/* <!-- Photo by '@candjstudios' & '@framesforyourheart' on Unsplash --> */}
        </div>
    )
}