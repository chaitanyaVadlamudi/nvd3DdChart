angular.module("d3Demo", ["nvd3"])
    .controller("drillController", ["$scope", function ($scope) {
        $scope.caption = "Incidents by Partners";
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                useInteractiveGuideline: true,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 120
                },
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Ticket Count',
                    tickFormat: function (d) {
                        return d3.format('')(d);
                    },
                    ticks: 4
                },
                stacked: true,
                showValues: true,

                multibar: {
                    dispatch: {
                        elementClick: function (e) {
                            $scope.data1 = [];
                            angular.copy($scope.data, $scope.data1);
                            $scope.data = e.data.drillDownData;
                            $scope.$apply();
                        }
                    }
                },
            }
        };
        $scope.drill = function (e) {

            if ($scope.data1 == null)
                return;
            else {
                $scope.data = $scope.data1;
            }
        }


        var ATTAdminUserMgmnt = [{
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                    "label": "user/account Administration",
                    "value": 30
                                }]
                        },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [{
                    "label": "user/account Administration",
                    "value": 2
                                }]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                    "label": "user/account Administration",
                    "value": 68
                                }]
                        }];
        var ATTAdminProOther = [{
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                    "label": "Web Other",
                    "value": 28
                                }]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                    "label": "Web Other",
                    "value": 48
                                }]
                        }];
        var ATTAdminproWeb = [{
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                    "label": "Provisioning Web",
                    "value": 28,
                    "drillDownData": ATTAdminProOther
                                }]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                    "label": "Provisioning Web",
                    "value": 48
                                }]
                        }];
        var ATTAdminPro = [{
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                        "label": "Provisioning",
                        "value": 28,
                        "drillDownData": ATTAdminproWeb
                                },
                    {
                        "label": "User management",
                        "value": 30,
                        "drillDownData": ATTAdminUserMgmnt
                                }]
                        },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [{
                        "label": "Provisioning",
                        "value": 0,
                        "drillDownData": ATTAdminproWeb
                                },
                    {
                        "label": "User management",
                        "value": 2,
                        "drillDownData": ATTAdminUserMgmnt
                                }]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                        "label": "Provisioning",
                        "value": 48,
                        "drillDownData": ATTAdminproWeb
                                },
                    {
                        "label": "User management",
                        "value": 68,
                        "drillDownData": ATTAdminUserMgmnt
                                }]
                        }
                          ]
        var drillDataATT = [{
                "key": "Outage",
                "color": "#7F312F",
                "values": [{
                        "label": "AT&T Administration",
                        "value": 0,
                        "drillDownData": ATTAdminPro
                                },
                    {
                        "label": "AT&T AT&T EoD",
                        "value": 0
                                },
                    {
                        "label": "AT&T Billing",
                        "value": 0
                                },
                    {
                        "label": "AT&T IT",
                        "value": 2
                                },
                    {
                        "label": "AT&T RAN",
                        "value": 2
                                }
                                      ]
                        }, {
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                        "label": "AT&T Administration",
                        "value": 58,
                        "drillDownData": ATTAdminPro
                                },
                    {
                        "label": "AT&T AT&T EoD",
                        "value": 50
                                },
                    {
                        "label": "AT&T Billing",
                        "value": 111
                                },
                    {
                        "label": "AT&T IT",
                        "value": 194
                                },
                    {
                        "label": "AT&T RAN",
                        "value": 215
                                }
                                      ]
                        },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [{
                        "label": "AT&T Administration",
                        "value": 2,
                        "drillDownData": ATTAdminPro
                                },
                    {
                        "label": "AT&T AT&T EoD",
                        "value": 131
                                },
                    {
                        "label": "AT&T Billing",
                        "value": 6
                                },
                    {
                        "label": "AT&T IT",
                        "value": 89
                                },
                    {
                        "label": "AT&T RAN",
                        "value": 162
                                }
                                      ]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                        "label": "AT&T Administration",
                        "value": 116,
                        "drillDownData": ATTAdminPro
                                },
                    {
                        "label": "AT&T AT&T EoD",
                        "value": 686
                                },
                    {
                        "label": "AT&T Billing",
                        "value": 374
                                },
                    {
                        "label": "AT&T IT",
                        "value": 63
                                },
                    {
                        "label": "AT&T RAN",
                        "value": 836
                                }
                                      ]
                        }
                          ];
        var drillDataJasper = [{
                "key": "Outage",
                "color": "#7F312F",
                "values": [{
                        "label": "Jasper Control Center",
                        "value": 3
                                },
                    {
                        "label": "Jasper Core",
                        "value": 0
                                }]
                        }, {
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [{
                        "label": "Jasper Control Center",
                        "value": 4
                                },
                    {
                        "label": "Jasper Core",
                        "value": 6
                                }]
                        },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [{
                        "label": "Jasper Control Center",
                        "value": 11
                                },
                    {
                        "label": "Jasper Core",
                        "value": 23
                                }]
                        },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [{
                        "label": "Jasper Control Center",
                        "value": 640
                                },
                    {
                        "label": "Jasper Core",
                        "value": 195
                                }]
                        }
                          ];

        $scope.data = [
            {
                "key": "Outage",
                "color": "#374649",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 4,
                        "drillDownData": drillDataATT
                    },
                    {
                        "label": "Jasper",
                        "value": 3,
                        "drillDownData": drillDataJasper
                    }
                ]
            },
            {
                "key": "SEV 1",
                "color": "#FD625E",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 628,
                        "drillDownData": drillDataATT
                    },
                    {
                        "label": "Jasper",
                        "value": 10,
                        "drillDownData": drillDataJasper
                    }
                ]
            },
            {
                "key": "SEV 2",
                "color": "#F2C80F",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 390,
                        "drillDownData": drillDataATT
                    },
                    {
                        "label": "Jasper",
                        "value": 34,
                        "drillDownData": drillDataJasper
                    }
                ]
            },
            {
                "key": "SEV 3",
                "color": "#01B8AA",
                "values": [
                    {
                        "label": "AT&T",
                        "value": 2105,
                        "drillDownData": drillDataATT
                    },
                    {
                        "label": "Jasper",
                        "value": 832,
                        "drillDownData": drillDataJasper
                    }
                ]
            }
        ];

            }])
