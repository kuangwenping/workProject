/**
 * Created by lenovo on 2017/6/6.
 */

import '../../../style/common.scss'
import '../index.scss'

import {setHeader,changMune} from '../../config/utils'

let init = function(){
    setHeader('J-head');
    changMune($('.head-nav'),{
        op:'s',
    });
}


init();



