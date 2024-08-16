export interface TeaBrewData {
    teaType: string;
    tempFahr: number;
    tempCels: number;
    gongFu: TeaBrewGongFu;
    western: TeaBrewWestern;
}

export type TeaBrewMethod = TeaBrewGongFu | TeaBrewWestern;
export type TeaBrewMethodName = 'gongFu' | 'western';

interface TeaBrewGongFu {
    amount: {
        from: number;
        to: number;
    };
    infusions: {
        first: number;
        next: number;
        max: number;
    }
}

interface TeaBrewWestern {
    amount: number;
    infusions: {
        first: number;
        next: number;
        max: number;
    };
};

const brewData: Array<TeaBrewData> = [
    /* TODO: DELETE THIS DEBUG BREW DATA */
    {
        teaType: "black",
        tempFahr: 185,
        tempCels: 85,
        gongFu: {
            amount: {
                from: 3,
                to: 3.5
            },
            infusions: {
                first: 5,
                next: 1,
                max: 5
            }
        },
        western: {
            amount: 0.6,
            infusions: {
                first: 12,
                next: 6,
                max: 3
            }
        }
    },
    {
        teaType: "White",
        tempFahr: 185,
        tempCels: 85,
        gongFu: {
            amount: {
                from: 3,
                to: 3.5
            },
            infusions: {
                first: 20,
                next: 10,
                max: 5
            }
        },
        western: {
            amount: 0.6,
            infusions: {
                first: 120,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "Green",
        tempFahr: 175,
        tempCels: 80,
        gongFu: {
            amount: {
                from: 3,
                to: 3.5
            },
            infusions: {
                first: 15,
                next: 3,
                max: 5
            }
        },
        western: {
            amount: 0.5,
            infusions: {
                first: 120,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "Yellow",
        tempFahr: 185,
        tempCels: 85,
        gongFu: {
            amount: {
                from: 3,
                to: 3.5
            },
            infusions: {
                first: 20,
                next: 10,
                max: 5
            }
        },
        western: {
            amount: 0.5,
            infusions: {
                first: 120,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "Oolong (strip)",
        tempFahr: 195,
        tempCels: 90,
        gongFu: {
            amount: {
                from: 4,
                to: 5
            },
            infusions: {
                first: 15,
                next: 5,
                max: 6
            }
        },
        western: {
            amount: 0.6,
            infusions: {
                first: 120,
                next: 60,
                max: 4
            }
        }
    },
    {
        teaType: "Oolong (ball)",
        tempFahr: 205,
        tempCels: 95,
        gongFu: {
            amount: {
                from: 6,
                to: 6.5
            },
            infusions: {
                first: 25,
                next: 10,
                max: 7
            }
        },
        western: {
            amount: 0.7,
            infusions: {
                first: 120,
                next: 60,
                max: 4
            }
        }
    },
    {
        teaType: "Black (small leaf)",
        tempFahr: 205,
        tempCels: 95,
        gongFu: {
            amount: {
                from: 4.5,
                to: 5
            },
            infusions: {
                first: 10,
                next: 5,
                max: 5
            }
        },
        western: {
            amount: 0.6,
            infusions: {
                first: 120,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "Black (large leaf)",
        tempFahr: 205,
        tempCels: 95,
        gongFu: {
            amount: {
                from: 4,
                to: 5
            },
            infusions: {
                first: 10,
                next: 5,
                max: 5
            }
        },
        western: {
            amount: 0.7,
            infusions: {
                first: 120,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "PuErh (raw)",
        tempFahr: 205,
        tempCels: 95,
        gongFu: {
            amount: {
                from: 5,
                to: 6
            },
            infusions: {
                first: 20,
                next: 10,
                max: 8
            }
        },
        western: {
            amount: 0.7,
            infusions: {
                first: 180,
                next: 60,
                max: 3
            }
        }
    },
    {
        teaType: "PuErh (ripe)",
        tempFahr: 210,
        tempCels: 99,
        gongFu: {
            amount: {
                from: 6,
                to: 7
            },
            infusions: {
                first: 20,
                next: 10,
                max: 8
            }
        },
        western: {
            amount: 0.8,
            infusions: {
                first: 240,
                next: 60,
                max: 4
            }
        }
    }
];
export default brewData;
