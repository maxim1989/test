import { createIndex, fillIndex } from './search';

test('fillIndex', () => {
    const str = 'Name';
    const str_2 = 'Mame'
    const str_3 = 'Mu'
    const index = {
        n: {
            data: {1: true}
        }
    };
    const id = 1;
    const id_2 = 2;
    const id_3 = 3;

    fillIndex(str, index, id);
    fillIndex(str_2, index, id_2);
    fillIndex(str_3, index, id_3);

    expect(index).toEqual({
        n: {
            data: {1: true},
            a: {
                data: {1: true},
                m: {
                    data: {1: true},
                    e: {
                        data: {1: true}
                    }
                }
            }
        },
        m: {
            data: {2: true, 3: true},
            a: {
                data: {2: true},
                m: {
                    data: {2: true},
                    e: {
                        data: {2: true}
                    }
                }
            },
            u: {
                data: {3: true}
            }
        }
    })
});

test('createIndex', () => {
    const users = [{"id":1,"name":"Name","surname":"Surname","secondName":"SecondName","group":"Руководство"}];
    const { nameIndex, surnameIndex, secondNameIndex } = createIndex(users);

    expect(nameIndex).toEqual({
        n: {
            data: {1: true},
            a: {
                data: {1: true},
                m: {
                    data: {1: true},
                    e: {
                        data: {1: true}
                    }
                }
            }
        }
    });
    expect(surnameIndex).toEqual({
        s: {
            data: {1: true},
            u: {
                data: {1: true},
                r: {
                    data: {1: true},
                    n: {
                        data: {1: true},
                        a: {
                            data: {1: true},
                            m: {
                                data: {1: true},
                                e: {
                                    data: {1: true}
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    expect(secondNameIndex).toEqual({
        s: {
            data: {1: true},
            e: {
                data: {1: true},
                c: {
                    data: {1: true},
                    o: {
                        data: {1: true},
                        n: {
                            data: {1: true},
                            d: {
                                data: {1: true},
                                n: {
                                    data: {1: true},
                                    a: {
                                        data: {1: true},
                                        m: {
                                            data: {1: true},
                                            e: {
                                                data: {1: true}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});