'use client'

import NextLink from 'next/link'
import styles from '../styles.module.css'
import { EditIcon } from '@chakra-ui/icons';
import PodIosInstall from './Installations/PodIosInstall';
import WrappingUpApp from './Installations/WrappingUpApp';
import AndroidOsBundle from './Installations/AndroidOsBundle';
import AdditionalInstall from './Installations/AdditionalInstall';
import InstallationGuide from './Installations/InstallingPackage';
import { Heading, Box, Text, Flex, Link, } from '@chakra-ui/react';
import DependenciesInstall from './Installations/ExpoDependencyInstall';
import ReactDependencyInstall from './Installations/ReactDependencyInstall';

function GettingStartedMain() {
  return (
    <Flex flexDir={'column'}>
        <Box py={2}>
            <Heading>Getting started</Heading>
            <Text textAlign={'justify'}>
                What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application and give you the background that you need to dive deeper into the more advanced parts of React Navigation.
            </Text>
        </Box>

        <Box>
            <Heading py={4} as={'h3'} fontSize={'3xl'}>Pre-requisites</Heading>
            <Text textAlign={'justify'}>
                If you&apos;re already familiar with JavaScript, React and React Native, then you&lsquo;ll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you&apos;re done.
            </Text>
            <Text py={4}>
                Here are some resources to help you out:
            </Text>
            <Box px={5}>
                <Box>
                    <Text>1. <Link href="https://www.reactnative.express/" color={'#a697ce'}>React Native Express</Link> (Sections 1 to 4)</Text> 
                </Box>
                <Box>
                    <Text>2. <Link href="https://react.dev/learn" color={'#a697ce'}>Main Concepts of React</Link></Text>
                </Box>
                <Box>
                    <Text>3. <Link href="https://react.dev/reference/react" color={'#a697ce'}>React Hooks</Link></Text>
                </Box>
                <Box>
                    <Text>4. <Link href="https://react.dev/learn/passing-data-deeply-with-context" color={'#a697ce'}>React Context</Link> (Advanced)</Text>
                </Box>
            </Box>
        </Box>

        <Box>
            <Heading py={4}>Minimum requirements</Heading>
            <Box px={5} gap={4}>
                <Box>
                    <Text><span className={styles.span}>react-native</span> {'>'}= 0.63.0</Text> 
                </Box>
                <Box>
                    <Text><span className={styles.span}>expo</span> {'>'}= 41 (if you use<Link href="https://expo.io/" color={'#a697ce'} p={1} borderRadius={10}>Expo</Link>)</Text>
                </Box>
                <Box>
                    <Text><span className={styles.span}>typescript</span> {'>'}= 4.1.0 (if you use <Link href="https://www.typescriptlang.org/" color={'#a697ce'}>TypeScript</Link>)</Text>
                </Box>
            </Box>
        </Box>

        {/*Main Package Install */}
        <Box>
            <Heading py={4}>Installation</Heading>
            <Text py={4}>Install the required packages in your React Native project:</Text>
            {/*Tabs */}
            <Box py={4}>
                <InstallationGuide />
            </Box>
            <Box py={4}>
                <Text>
                    React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don&lsquo;t worry too much about this for now, it&lsquo;ll become clear soon enough! To frontload the installation work, let&lsquo;s also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.
                </Text>
            </Box>
            <Box py={4}>
                <Text>
                    The libraries we will install now are <Link href="https://github.com/software-mansion/react-native-screens" color={'#a697ce'}><span className={styles.span}> react-native-screens</span></Link> and <Link href="https://github.com/th3rdwave/react-native-safe-area-context" color={'#a697ce'}><span className={styles.span}>react-native-safe-area-context</span></Link>. If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.
                </Text>
            </Box>
        </Box>

        {/*Installing dependencies into an Expo managed project */}
        <Box>
            <Heading py={4} fontSize='27px'>Installing dependencies into an Expo managed project</Heading>
            <Box py={4}>
                <DependenciesInstall />
            </Box>
            <Box py={4}>
                <Text>This will install versions of these libraries that are compatible.</Text>
            </Box>
            <Box py={4}>
                <Text>
                    You can now continue to <Link href="https://reactnavigation.org/docs/hello-react-navigation" color={'#a697ce'}> &ldquo;Hello React Navigation&ldquo;</Link> to start writing some code.
                </Text>
            </Box>
        </Box>

        {/*Installing dependencies into a bare React Native project */}
        <Box>
            <Heading py={4} fontSize='27px'>Installing dependencies into a bare React Native project</Heading>
            <Text py={4}>In your project directory, run:</Text>
            <Box py={4}>
                <ReactDependencyInstall />
            </Box>
            <Box my={4} borderLeft={'4px'} borderColor={'#a697ce'}>
                <Text px={4}>
                    Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.
                </Text>
            </Box>
            <Box>
                <Text>
                    From React Native 0.60 and higher, <Link href="https://github.com/react-native-community/cli/blob/master/docs/autolinking.md" color={'#a697ce'}> linking is automatic.</Link> So you don&apos;t need to run <span className={styles.span}>react-native link</span>.
                </Text>
            </Box>
            <Box py={4}>
                <Text>
                    If you&apos;re on a Mac and developing for iOS, you need to install the pods (via <Link href="https://cocoapods.org/" color={'#a697ce'}> Cocoapods</Link>) to complete the linking.
                </Text>
            </Box>
        </Box>

        {/* npx pod-install ios */}
        <Box>
            <Box py={4}>
                <PodIosInstall />
            </Box>
            <Box>
                <Text>
                    <span className={styles.span}>react-native-screens</span> package requires one additional configuration step to properly work on Android devices. Edit <span className={styles.span}>MainActivity.java</span> file which is located in <span className={styles.span}>android/app/src/main/java/&quot;your package name&quot;/MainActivity.java</span>.
                </Text>
            </Box>
            <Box py={4}>
                <Text>
                    Add the highlighted code to the body of <span className={styles.span}>MainActivity class</span>:
                </Text>
            </Box>
            <Box py={4}>
                <AdditionalInstall />
                <Box py={2}>
                    <Text>
                        and make sure to add the following import statement at the top of this file below your package statement:
                    </Text>
                </Box>
                <Box>
                    <AndroidOsBundle />
                </Box>
                <Box py={2}>
                    <Text>
                        This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.
                    </Text>
                </Box>
                <Box my={4} borderLeft={'4px'} borderColor={'#a697ce'}>
                    <Text px={4} pb={5}>
                        Note: When you use a navigator (such as stack navigator), you&ldquo;ll need to follow the installation instructions of that navigator for any additional dependencies. If you&ldquo;re getting an error &ldquo;Unable to resolve module&ldquo;, you need to install that module in your project.
                    </Text>
                </Box>
            </Box>

        </Box>

        {/*Wrapping your app in NavigationContainer */}
        <Box>
            <Heading py={4}>Wrapping your app in <span className={styles.span}>NavigationContainer</span></Heading>
            <Box py={4}>
                <Text>
                    Now, we need to wrap the whole app in <span className={styles.span}>NavigationContainer</span>. Usually you&apos;d do this in your entry file, such as <span className={styles.span}>index.js</span> or <span className={styles.span}>App.js</span>:
                </Text>
            </Box>
            <Box py={4}>
                <WrappingUpApp />
            </Box>
            <Box my={4} borderLeft={'4px'} borderColor={'#a697ce'}>
                <Text px={4} pb={5}>
                    Note: In a typical React Native app, the <span className={styles.span}>NavigationContainer</span> should be only used once in your app at the root. You shouldn&apos;t nest multiple <span className={styles.span}>NavigationContainers</span> unless you have a specific use case for them.
                </Text>
            </Box>
            <Box py={4}>
                <Text>
                    Now you are ready to build and run your app on the device/simulator.
                </Text>
            </Box>
            <Box py={4}>
                <Text>
                    Continue to <Link href='https://reactnavigation.org/docs/hello-react-navigation' color='#a697ce'>&quot;Hello React Navigation&quot;</Link> to start writing some code.
                </Text>
            </Box>
        </Box>
        <Box py={5}>
            <Link color={'#a697ce'} as={NextLink} href='https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/getting-started.md' isExternal>
                <EditIcon mx='2px'/> Edit this page
            </Link>
        </Box>
    </Flex>
  );
}

export default GettingStartedMain;