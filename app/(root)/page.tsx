import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = {firstName: 'Hans', lastName: 'Kristian', email:'test@gmail.com'};

    return (
        <section className="home">
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={ loggedIn?.firstName || "Guest"}
                        subtext="Acccess and manage your account and transaction efficiently."
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250}
                    />
                </header>

                RECENT TRANSACTION
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1250}, {currentBalance: 2050}]}            
            />
        </section>
    )
}

export default Home