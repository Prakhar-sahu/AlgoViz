import React, {Component} from 'react';
import "./details.css"
class Details extends Component {

    Switcherr = () => {
        switch (this.props.algo) {
            case 0:
                return <div className='row bg-info m-0 p-2'>
                    <div className='col-3  card me-1 bg-light '>
                        The Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence
                        commonly starts from 0 and 1
                    </div>
                    <div className='col-3  card me-1 bg-light '>
                        N = Nth fibonacchi Number
                    </div>
                    <div className='col-3   card me-1 bg-light '>
                        function = nCr(n,r)
                    </div>
                    <div className='col-3  card me-1 bg-light'>
                        Fib(0) = 0 <br/>
                        Fib(1) = 1 <br/>
                        Fib(n) = Fib(n-1) + Fib(n-2)
                    </div>
                </div>;

            case 1:
                return <div className='row bg-info m-0 p-2 '>
                    <div className='col-3  card me-1 bg-light'>
                        In mathematics, the binomial coefficients are the positive integers that occur as coefficients
                        in the binomial theorem. It is the coefficient of
                        the x^k term in the polynomial expansion of the binomial power (1+x)^n
                    </div>
                    <div className='col-3  card me-1 bg-light'>
                        nCr = n! / ( k! * (n-k)! )
                    </div>
                    <div className='col-3  card me-1 bg-light'>
                        function = nCr(n,r)
                    </div>
                    <div className='col-3  card me-1 bg-light'>
                        nCr(a,a) = 1 <br/>
                        nCr(a,0) = 1 <br/>
                        nCr(n,r) = nCr(n-1,r-1)+nCr(n-1,r)
                    </div>
                </div>;
            

            default:
                return <b>Prakhar</b>;

        }
    }

    render() {
        return (
            <div>
                {this.Switcherr()}
            </div>
        );
    }
}

export default Details;