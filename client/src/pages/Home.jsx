import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { CustonButtom } from '../components';
import state from '../store';
import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation,
} from "../config/motion";

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src="./threejs.png" alt="logo" className=' w-8 h-8 object-contain' />
                    </motion.header>
                    <motion.div className=' home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br className=' xl:block hidden' /> DO IT
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className='flex flex-col gap-5'
                        >
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create YOur Unique And Exclusive Shirt With Our Brand-New 3D Customization Tool. <strong>
                                    UnLeash Your Imagination
                                </strong> And Define Your Own Style
                            </p>
                            <CustonButtom
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customeStles="w-fit px-4 py-2.5 font-bold text-sm"
                            />


                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home