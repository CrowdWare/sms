plugins {
    kotlin("multiplatform") version "1.9.20"
    id("maven-publish")
}

group = "at.crowdware"
version = "1.1.0"

kotlin {
    jvm {
        jvmToolchain(11)
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }
    
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
        nodejs()
    }
    
    sourceSets {
        val commonMain by getting {
            dependencies {
                // No external dependencies - pure Kotlin implementation
            }
        }
        
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        
        val jvmMain by getting {
            dependencies {
                // JVM specific dependencies if needed
            }
        }
        
        val jvmTest by getting {
            dependencies {
                // JVM test dependencies if needed
            }
        }
        
        val jsMain by getting {
            dependencies {
                // JS specific dependencies if needed
            }
        }
        
        val jsTest by getting {
            dependencies {
                // JS test dependencies if needed
            }
        }
    }
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            from(components["kotlin"])
            
            pom {
                name.set("Simple Markup Script (SMS)")
                description.set("A lightweight, multiplatform Kotlin script engine with native function integration")
                url.set("https://github.com/CrowdWare/sms")
                
                licenses {
                    license {
                        name.set("GNU General Public License v3.0")
                        url.set("https://www.gnu.org/licenses/gpl-3.0.html")
                    }
                }
                
                developers {
                    developer {
                        id.set("crowdware")
                        name.set("CrowdWare")
                        email.set("art@crowdware.info")
                    }
                }
            }
        }
    }
}
