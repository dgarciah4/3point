import React from 'react'

const BettingEducationCenter = () => {
    return(
        <header className='bg-transparent'> 
            <h1 className='text-center lg: text-center dark:text-transparent'>Welcome to the Betting Education Center. Here you can learn strategies on how to place bets,
        make good betting decisions, budget your money and learn about how to combat any betting addicitions you may fall under.
            </h1> 


        <div className ='mx-6 py-10 text-center md:text-left lg:text-center grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-4'>
        <div className=''>
                <h2
                className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
                <img className=""style={{height: 200, width: 200}} src={Logo} alt="" />
                </h2>
                
              </div>
            <div className = "">
        <p className='mb-6'>
        <a href = "https://www.betterhealth.vic.gov.au/health/healthyliving/gambling-how-to-change-your-habits"
            target = "_blank">
            Getting over gambling addiction</a>
        </p>
        <p className='mb-6'>
        <a href = "https://www.actionnetwork.com/how-to-bet-on-sports/general/sports-betting-for-beginners-10-things-to-know"
            target = "_blank">
            10 things to know before placing bets</a>
        </p>
        <p className='mb-6'>
        <a href = "https://www.wsn.com/betting-guide/money-management/"
        target = "_blank">Budgeting Tips and money management</a>
        </p>
            </div>

            <div className="">
            <p className='mb-6'>
        <a href = "https://www.thesportsgeek.com/sports-betting/strategy/"
            target = "_blank">
            Betting Strategies</a>
        </p>
        <p className='mb-6'>
        <a href = "https://sportsbook.draftkings.com/help/how-to-bet"
            target = "_blank">
            Sportsbook on betting tips</a>
        </p>
        <p className='mb-6'>
        <a href = "https://www.wsn.com/betting-guide/strategies/"
        target = "_blank">Pro strategy tips and tricks</a>
        </p>
            </div>
            <div className="">
            <p>
        <a href = "https://insidersbettingdigest.com/guides/paroli-betting-system/#:~:text=The%20Paroli%20betting%20system%20is,the%20risk%20of%20significant%20losses."
            target = "_blank">
            Paroli betting system</a>
        </p>
        <p className='mb-6'>
        <a href = "https://www.youtube.com/watch?v=4AE8STbgJDY&ab_channel=LINEMAKERSPORTS"
            target = "_blank">
            Sports betting strategy that returns a profit.</a>
        </p>
        <p className='mb-6'>
        <a href = "https://www.youtube.com/watch?v=iL4rmbwFwEY&ab_channel=CaanBerryProTrader"
        target = "_blank">Make an income betting on sports</a>
        </p>
            </div>
        </div>

        </header>
        
    )
    
}
export default BettingEducationCenter;