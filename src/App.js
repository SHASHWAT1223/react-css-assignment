import './App.css';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <p className='airnow'>↗️ Airnow</p>
        <p className='line'></p>
        <h4>Manage</h4>
          <h1 className='proxy'>Proxy</h1>
          <h1 className='balance'>Balance</h1>
          <h1 className='online'>Online Check</h1>
          <h1 className='affs'>Affiliate system</h1>
          <h1 className='heading'>Support</h1>
          <h1 className='tickets'>Tickets</h1>
          <h1 className='faq'>FAQ</h1>
            <div className='lprect'>
              <h1 className='help'>Help Center</h1>
              <h2 className='visit'>Visit our help center</h2>
              <h3 className='start'>Start</h3>
              <img src={require("./man.jpeg")} className='man'/>
            </div>
      </div>
      <div className="wrectangle">
          <h1>Balance</h1>
            <img src={require("./notibell.jpg")} className='noti'/>
            <img src={require("./myphoto.png")} className='myphoto'/>
            <h2>Daily balance overview</h2>
              <span class="dot"></span>
              <h3 className='blue'>Spent</h3>
              <span class="dot1"></span>
              <h3 className='purple'>Referral</h3>
              <div className='blankrect'> 14 days   🔻</div>
                <img src={require("./chart.jpg")} className='chart'/>
          <p className='line2'></p>
                <div className='coenring'>
                    <h3>Balance statistic</h3>
                    <img src={require("./circle.jpg")} className='circle'/>
                    <span class="dotp"></span>
                    <span class="dotp1"></span>
                    <span class="dotsky"></span>
                      <div className='paisa'>
                        <h1 className='dollar'>$ 1,872</h1>
                        <h1 className='money'>Money Spent
                        </h1>
                      </div>
                    <span class="dot2"></span>
                    <h4 className='spent'>Spent</h4>
                    <span class="dot3"></span>
                    <h4 className='referral'>Referral</h4>
                </div>
                <p className='payment'>Payment Methods</p>
                    <div className='paypal'>
                        <h1 className='pay'>Paypal</h1>
                        <h1 className='pay1'>1-5%</h1>
                          <img src={require("./paypals.png")} className='paypals'/>
                    </div>

                    <div className='mastercard'>
                        <h1 className='master'>Mastercard</h1>
                        <h1 className='master1'>1-5%</h1>
                        <img src={require("./mastercards.png")} className='mastercards'/>
                    </div>

                    <div className='webmoney'>
                        <h1 className='web'>Webmoney</h1>
                        <h1 className='web1'>1-5%</h1>
                        <img src={require("./webmoneys.png")} className='webmoneys'/>
                    </div>

                    <div className='qiwi'>
                        <h1 className='qi'>Qiwi</h1>
                        <h1 className='qi1'>1-5%</h1>
                        <img src={require("./qiwis.jpeg")} className='qiwis'/>
                    </div>

                    <div className='transferwise'>
                        <h1 className='transfer'>Transferwise</h1>
                        <h1 className='transfer1'>1-5%</h1>
                        <img src={require("./transferwises.png")} className='transferwises'/>
                    </div>
                    <div className='transaction'>
                        <h1 className='transactions'>Transactions</h1>
                        <h1 className='today'> Today</h1>
                        <h1 className='week'> This week</h1>
                        <h1 className='month'>This month</h1>

                        <h1 className='date'>Date and Time</h1>
                        <h1 className='pm'>Payment Method</h1>
                        <h1 className='status'>Status</h1>
                        <h1 className='amo'>Amount($)</h1>
                        <h1 className='date1'>17 Feb 2020, 16:30</h1>
                        <h1 className='date2'>14 Feb 2020, 12:39</h1>
                        <h1 className='date3'>12 Feb 2020, 09:45</h1>
                        <h1 className='date4'>10 Feb 2020, 12:39</h1>

                        <h1 className='mtc'>Mastercard</h1>
                        <img src={require("./mastercards.png")} className='mtcs'/>

                        <h1 className='pp'>Paypal</h1>
                        <img src={require("./paypals.png")} className='pps'/>

                        <h1 className='qw'>Qiwi</h1>
                        <img src={require("./qiwis.jpeg")} className='qws'/>

                        <h1 className='wm'>Webmoney</h1>
                        <img src={require("./webmoneys.png")} className='wms'/>

                        <h1 className='pending1'>Pending</h1>
                        <h1 className='pending2'>Pending</h1>
                        <h1 className='done'>Done</h1>
                        <h1 className='pending3'>Pending</h1>

                        <h1 className='am1'>-400.00$</h1>
                        <h1 className='am2'>-250.00$</h1>
                        <h1 className='am3'>-1000.00$</h1>
                        <h1 className='am4'>-250.00$</h1>
                      </div>

                      <div className='income'>
                        <h1 className='inex'>Income/Expense</h1>
                        <h1 className='inex1'>$22,578.00</h1>
                        <h1 className='text1'>Total amount expense</h1>
                        <div className='box1'>↗</div>
                        <h1 className='inex2'>$5,783.00</h1>
                        <h1 className='text2'>Total amount income</h1>
                        <div className='box2'>↙</div>
                      </div>
      </div>
    </div>
  );
}


export default App;
