(function(e) {
    function t(t) {
        for (var o, i, l = t[0], s = t[1], c = t[2], u = 0, p = []; u < l.length; u++) i = l[u], Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]), a[i] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        d && d(t);
        while (p.length) p.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== a[s] && (o = !1)
            }
            o && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            app: 0
        },
        r = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var d = s;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "4a26": function(e, t, n) {
        "use strict";
        n("ba66")
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o = n("2b0e"),
            a = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-app", [n("v-main", [n("v-app-bar", {
                    attrs: {
                        absolute: "",
                        color: "teal lighten-2",
                        dark: "",
                        "elevate-on-scroll": "",
                        "scroll-target": "#scrolling-techniques-7"
                    }
                }, [n("v-toolbar-title", [e._v("Dialog annotation")]), n("v-spacer")], 1), n("Tool")], 1)], 1)
            },
            r = [],
            i = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-container", {
                    staticStyle: {
                        "padding-top": "80px"
                    },
                    attrs: {
                        width: "100%",
                        id: "dd-tool",
                        fluid: ""
                    }
                }, 
                [n("v-row", 
                    [n("v-col", 
                            {
                                attrs: {
                                    cols: "3"
                                }
                            }, 
                            [n("h2", 
                                [e._v("Input "), 
                                        n("code", [e._v(e._s(e.documentName))])
                                    ]), 
                                n("br"), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1 white--text",
                                        attrs: {
                                            block: "",
                                            color: "teal"
                                        },
                                        on: {
                                            click: e.uploadJsonFile
                                            }
                                    }, 
                                    [n("v-icon", [e._v("mdi-upload")]), e._v("Upload existing annotations")], 
                                    1), 
                                n("br"), 
                                n("v-textarea", {
                                    staticStyle: {
                                        "font-family": "monospace"
                                    },
                                    attrs: {
                                        clearable: "",
                                        outlined: "",
                                        cols: "150",
                                        rows: "30",
                                        label: "Input data here..."
                                    },
                                    on: {
                                        input: function(t) {
                                            return e.updateGraph()
                                        }
                                    },
                                    model: {
                                        value: e.inputData,
                                        callback: function(t) {
                                            e.inputData = t
                                        },
                                        expression: "inputData"
                                    }
                                })
                            ], 
                            1
                        ), 
                        n("v-col", 
                            {
                                attrs: {
                                    cols: "2"
                                }
                            }, 
                            [n("h2", [e._v("Operations")]), 
                                n("br"), 
                                n("h3", [e._v("Add/remove/join")]), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1",
                                        attrs: {
                                            block: "",
                                            color: "primary",
                                            disabled: 2 != e.selected.nodes.length
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.addEdge()
                                            }
                                        }
                                    }, 
                                    [n("v-icon", [e._v("mdi-plus")]), e._v(" Add edge ")],
                                    1), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1",
                                        attrs: {
                                            block: "",
                                            disabled: 0 == e.selected.edges.length,
                                            color: "error"
                                        },
                                        on: {
                                            click: e.removeEdge
                                        }
                                    }, 
                                    [n("v-icon", [e._v("mdi-minus")]), e._v(" Remove edge ")], 
                                    1), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1",
                                        attrs: {
                                            block: "",
                                            disabled: 2 != e.selected.nodes.length,
                                            color: "success"
                                        },
                                        on: {
                                            click: function(t) {
                                                e.selected.label = "joint", e.addEdge()
                                            }
                                        }
                                    }, 
                                    [n("v-icon", [e._v("mdi-equal")]), e._v(" Join nodes ")], 
                                    1), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1",
                                        attrs: {
                                            block: "",
                                            color: "success"
                                        },
                                        on: {
                                            click: function(t) {
                                                e.joinAllSubsequent()
                                            }
                                        }
                                    }, 
                                    [n("v-icon", [e._v("mdi-equal")]), e._v(" Join all nodes ")], 
                                    1), 
                                n("h3", [e._v("Label")]), 
                                n("v-radio-group", 
                                    {
                                        model: {
                                            value: e.selected.label,
                                            callback: function(t) {
                                                e.$set(e.selected, "label", t)
                                            },
                                            expression: "selected.label"
                                        }
                                    }, 
                                    e._l(e.labels, (function(t) {
                                        return n("v-radio", {
                                            key: t,
                                            attrs: {
                                                label: "" + t,
                                                value: t
                                            },
                                            on: {
                                                click: e.updateLabel
                                            }
                                        })
                                    })), 
                                    1)
                            ], 
                            1
                        ), 
                        n("v-col", 
                            {
                                attrs: {
                                    cols: "5"
                                }
                            }, 
                            [n("h2", [e._v("Annotations (orphans : " + e._s(e.orphanNodes) + ")")]), 
                                n("div", 
                                    {
                                        staticClass: "viewport",
                                        staticStyle: {
                                            cursor: "grab"
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.select(null, null)
                                            },
                                            "!mousedown": function(t) {
                                                return e.blockEvents.apply(null, arguments)
                                            },
                                            "!wheel": function(t) {
                                                return e.blockEvents.apply(null, arguments)
                                            }
                                        }
                                    }, 
                                    [n("screen", 
                                        {
                                            ref: "screen",
                                            attrs: {
                                                height: "960"
                                            }
                                        }, 
                                        [e._l(e.graph.edges, 
                                                (function(t) {
                                                    return n("g", 
                                                            {
                                                                key: t.id,
                                                                on: {
                                                                    click: function(n) {
                                                                        return n.stopPropagation(), e.select(e.selected.edges, t, 1)
                                                                    }
                                                                }
                                                            }, 
                                                            [n("edge", 
                                                                    {
                                                                        class: e.isSelected(e.selected.edges, t) && "selected",
                                                                        attrs: {
                                                                            data: t,
                                                                            nodes: e.graph.nodes
                                                                        }
                                                                    }), 
                                                                n("vlabel", 
                                                                    {
                                                                        attrs: {
                                                                            edge: t,
                                                                            perc: 50,
                                                                            connector: "",
                                                                            useDrag: ""
                                                                        }
                                                                    }, 
                                                                    [n("small", 
                                                                        {
                                                                            staticStyle: {
                                                                                cursor: "grab",
                                                                                padding: "10px",
                                                                                "font-family": "monospace"
                                                                            },
                                                                        }, 
                                                                        [e._v(" " + e._s(e.padCenter(t.label, 15)) + " ")])]
                                                                )
                                                            ], 
                                                            1)
                                                })), 
                                            e._l(e.graph.nodes, 
                                                (function(t) {
                                                    return n("g", 
                                                                {
                                                                    key: t.id
                                                                }, 
                                                                [n("node", 
                                                                    {
                                                                        ref: "node",
                                                                        refInFor: !0,
                                                                        class: e.isSelected(e.selected.nodes, t) && "selected",
                                                                        attrs: {
                                                                            data: t,
                                                                            useDrag: t.useDrag
                                                                        }
                                                                    }, 
                                                                    [n("div", 
                                                                        {
                                                                            on: {
                                                                                click: function(n) {
                                                                                    return n.stopPropagation(), e.select(e.selected.nodes, t, 2)
                                                                                }
                                                                            }
                                                                        }, 
                                                                        [n("v-chip", 
                                                                            {
                                                                                attrs: {
                                                                                    "x-small": "",
                                                                                    color: "green lighten-4"
                                                                                }
                                                                            }, 
                                                                            [e._v(e._s(t.speaker) + " " + e._s(t.turn))]), 
                                                                        e._v(" " + e._s(t.label) + " ")], 
                                                                    1)]
                                                                )], 
                                                            1)
                                                })
                                            )
                                        ], 
                                        2
                                    )], 
                                    1
                                )
                            ]
                        ), 
                        n("v-col", 
                            {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.inputData,
                                    expression: "inputData"
                                }],
                                attrs: {
                                    cols: "2"
                                }
                            }, 
                            [n("h2", [e._v("Résultat")]), 
                                n("v-alert", 
                                    {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: e.orphanNodes > 0,
                                            expression: "orphanNodes > 0"
                                        }],
                                        attrs: {
                                            border: "top",
                                            type: "warning"
                                        }
                                    }, 
                                    [e._v(" Check there is no orphan nodes! ")]
                                ), 
                                n("v-btn", 
                                    {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 0 == e.orphanNodes,
                                            expression: "orphanNodes == 0"
                                        }],
                                        staticClass: "my-1 white--text",
                                        attrs: {
                                            block: "",
                                            color: "grey"
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.copyToClipboard(e.finalResult)
                                            }
                                        }
                                    }, 
                                    [n("v-icon", [e._v("mdi-clipboard")]), 
                                        e._v(" " + e._s(e.copyState) + " ")], 
                                    1
                                ), 
                                n("v-btn", 
                                    {
                                        staticClass: "mb-1 white--text",
                                        attrs: {
                                            block: "",
                                            color: "red"
                                        },
                                        on: {
                                            click: e.download
                                            }
                                    }, 
                                    [n("v-icon", [e._v("mdi-download")]), e._v(" Download ")], 
                                    1), 
                                n("v-textarea", 
                                    {
                                        ref: "result",
                                        staticStyle: {
                                            "font-family": "monospace"
                                        },
                                        attrs: {
                                            outlined: "",
                                            cols: "150",
                                            rows: "30",
                                            readonly: ""
                                        },
                                        model: {
                                            value: e.finalResult,
                                            callback: function(t) {
                                                e.finalResult = t
                                            },
                                            expression: "finalResult"
                                        }
                                    }
                                )
                            ], 
                            1
                        )
                    ], 
                    1
                )], 
                1)
            },
            l = [],
            s = n("5530"),
            c = n("b85c"),
            d = (n("4de4"), n("d3b7"), n("d81d"), n("e9c4"), n("843c"), n("4d90"), n("3ca3"), n("ddb0"), n("2b3d"), n("9861"), n("ac1f"), n("1276"), n("498a"), n("5319"), n("fb6a"), n("159b"), n("4e827"), n("7db0"), n("d3b0")),
            u = n("dcec"),
            p = n("eefe"),
            f = n("8337"),
            h = n("7aab"),
            v = n("11c1"),
            b = n.n(v),
            g = {
                name: "Tool",
                components: {
                    screen: u["a"],
                    Node: f["a"],
                    Edge: p["a"],
                    vlabel: h["a"]
                },
                computed: {
                    orphanNodes: function() {
                        return this.graph.nodes.filter((function(e) {
                            return e.orphan
                        })).length
                    },
                    finalResult: function() {
                        var e = Object();
                        return e.id = this.documentName, e.edus = this.graph.nodes.map((function(e) {
                            return {
                                text: e.label,
                                speaker: e.speaker,
                                eduidx: e.id - 1,
                                turnidx: e.turn
                            }
                        })), e.relations = this.graph.edges.map((function(e) {
                            return {
                                x: e.from.id,
                                y: e.to.id,
                                type: e.label
                            }
                        })), JSON.stringify(e, null, 2)
                    }
                },
                methods: {
                    padCenter: function(e, t) {
                        return e.padStart(e.length + Math.floor((t - e.length) / 2), " ").padEnd(t, " ")
                    },
                    copyToClipboard: function(e) {
                        var t = document.createElement("textarea");
                        t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), this.copyState = "Copied!"
                    },
                    download: function() {
                        var e = URL.createObjectURL(new Blob([this.finalResult]), {
                                type: "application/txt"
                            }),
                            t = document.createElement("a");
                        t.href = e, t.download = "annotations-".concat(this.documentName, ".json"), document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(e)
                    },
                    uploadJsonFile: function() {
                        console.log('In createFileInput');
                        var input = document.createElement('input');
                        input.type = 'file';
                        input.accept = '.json';

                        input.onchange = e => { 

                            // getting a hold of the file reference
                            var file = e.target.files[0]; 

                            // setting up the reader
                            var reader = new FileReader();
                            reader.readAsText(file,'UTF-8');
                         
                            // here we tell the reader what to do when it's done reading...
                            reader.onload = readerEvent => {
                                var content = readerEvent.target.result; // this is the content!
                                var json_annotations = JSON.parse(content);
                                console.log(json_annotations);
                                this.createInputWithUpload(json_annotations);
                            }
                         
                         }

                        input.click();
                        
                    },
                    createInputWithUpload: function(json_annotations) {
                        // Create the text to display in Iput based on the id and the edus
                        var new_text = json_annotations.id + '\n';
                        json_annotations.edus.forEach(edu => {
                            new_text += edu.speaker + '-' + edu.turnidx + ': ' + edu.text + '\n';
                        });
                        // Paste the text in the Input area
                        this.inputData = new_text;
                        // Create the nodes of the graph
                        this.updateGraph();
                        var nodes = this.graph.nodes;
                        // Create the relations of the graph based on the loaded relations
                        json_annotations.relations.forEach(relation => {
                            var fromNode = nodes[relation.x - 1];
                            var toNode = nodes[relation.y - 1];
                            this.graph.createEdge({
                                id: b()(),
                                from: fromNode,
                                to: toNode,
                                type: "smooth",
                                label: relation.type,
                                toAnchor: { x: "100%", y: "50%" },
                                fromAnchor: { x: "100%", y: "50%" }
                            });
                            this.graph.updateNode(fromNode, { orphan: false });
                            this.graph.updateNode(toNode, { orphan: false });
                            this.copyState = "Copy to clipboard";
                        });
                    },
                    updateGraph: function() {
                        var e = this,
                            t = this.inputData.replace("\n\n", "").trim().split("\n");
                        if (!(t.length < 2)) {
                            this.documentName = t[0];
                            var n = t.slice(1),
                                o = n.map((function(e, t) {
                                    return {
                                        id: t + 1,
                                        speaker: e[0],
                                        turn: parseInt(e.split(":")[0].split("-")[1], 10),
                                        label: e.split(":")[1].trim(),
                                        x: 10,
                                        y: 50 * t,
                                        useDrag: !0,
                                        orphan: !0
                                    }
                                }));
                            this.graph.reset();
                            var a, r = Object(c["a"])(o);
                            try {
                                for (r.s(); !(a = r.n()).done;) {
                                    var i = a.value;
                                    this.graph.createNode(Object(s["a"])({}, i))
                                }
                            } catch (l) {
                                r.e(l)
                            } finally {
                                r.f()
                            }
                            this.$nextTick((function() {
                                e.$refs.screen.zoomNodes(e.graph.nodes, {
                                    scale: 1
                                })
                            })), this.$refs.node && this.$nextTick((function() {
                                e.$refs.node.forEach((function(e) {
                                    e.fitContent()
                                }))
                            }))
                        }
                    },
                    addEdge: function() {
                        var e = this.selected.nodes.sort((function(e, t) {
                            return e.id > t.id
                        }));
                        this.graph.edges.find((function(t) {
                            return t.from == e[0].id && t.to == e[1].id
                        })) || (this.graph.createEdge({
                            id: b()(),
                            from: e[0],
                            to: e[1],
                            type: "smooth",
                            label: this.selected.label,
                            toAnchor: {
                                x: "100%",
                                y: "50%"
                            },
                            fromAnchor: {
                                x: "100%",
                                y: "50%"
                            }
                        }), this.graph.updateNode(e[0], {
                            orphan: !1
                        }), this.graph.updateNode(e[1], {
                            orphan: !1
                        }), this.copyState = "Copy to clipboard")
                    },
                    joinAllSubsequent: function () {
                        var nodes = this.graph.nodes;
                        for (var i = 0; i < nodes.length - 1; i++) {
                            var fromNode = nodes[i];
                            var toNode = nodes[i + 1];
                            this.graph.createEdge({
                                id: b()(),
                                from: fromNode,
                                to: toNode,
                                type: "smooth",
                                label: "joint",
                                toAnchor: { x: "100%", y: "50%" },
                                fromAnchor: { x: "100%", y: "50%" }
                            });
                            this.graph.updateNode(fromNode, { orphan: false });
                            this.graph.updateNode(toNode, { orphan: false });
                        }
                        this.copyState = "Copy to clipboard";
                    },
                    isOrphan: function(e) {
                        return 0 == this.graph.edges.filter((function(t) {
                            return t.from == e || t.to == e
                        })).length
                    },
                    removeEdge: function() {
                        var e = this.selected.edges[0];
                        this.graph.edges = this.graph.edges.filter((function(t) {
                            return t.id != e.id
                        }));
                        var t = e.from,
                            n = e.to;
                        this.graph.nodes.find((function(e) {
                            return e.id == n.id
                        })).orphan = this.isOrphan(n.id), this.graph.nodes.find((function(e) {
                            return e.id == t.id
                        })).orphan = this.isOrphan(t.id), this.selected.edges = [], this.copyState = "Copy to clipboard"
                    },
                    updateLabel: function() {
                        this.selected.edges.length > 0 && (this.selected.edges[0].label = this.selected.label), this.copyState = "Copy to clipboard"
                    },
                    select: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        if (!e) return this.selected.edges = [], void(this.selected.nodes = []);
                        e && e.length > n - 1 && e.shift(), this.isSelected(e, t) || e.push(t)
                    },
                    isSelected: function(e, t) {
                        return e && e.find((function(e) {
                            return e.id == t.id
                        }))
                    },
                    blockEvents: function(e) {
                        var t, n = e.path || (null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e));
                        if (null !== n && void 0 !== n && n.find((function(e) {
                                var t;
                                return null === (t = e.classList) || void 0 === t ? void 0 : t.contains("no-drag")
                            }))) {
                            var o = this.$refs.screen.panzoom;
                            o.options.preventMouseEventsDefault = !1, document.addEventListener("mouseup", (function() {
                                o.options.preventMouseEventsDefault = !0
                            }), {
                                once: !0
                            }), e.stopPropagation()
                        }
                        null !== n && void 0 !== n && n.find((function(e) {
                            var t;
                            return null === (t = e.classList) || void 0 === t ? void 0 : t.contains("no-wheel")
                        })) && e.stopPropagation()
                    }
                },
                data: function() {
                    return {
                        inputData: "",
                        graph: new d["a"],
                        documentName: "",
                        labels: [
                            "Fuzzy",
                            "Unrelated", 
                            "Digression",
                            "Explanation", 
                            "Consequence", 
                            "Illustration", 
                            "Subordinating 1", 
                            "Subordinating 2", 
                            "Subordinating 3", 
                            "Enumeration", 
                            "Continuation", 
                            "Semantic link", 
                            "Phonological link", 
                            "Coordinating 1", 
                            "Coordinating 2", 
                            "Coordinating 3", 
                            "Meta",
                            "Recording issue", 
                            "Event in the physical context", 
                            "Draw on background context", 
                            "Relation 1", 
                            "Relation 2", 
                            "Relation 3",
                        ],
                        copyState: "Copy to clipboard",
                        selected: {
                            nodes: [],
                            edges: [],
                            label: "Continuation"
                        }
                    }
                }
            },
            m = g,
            y = (n("4a26"), n("2877")),
            _ = n("6544"),
            w = n.n(_),
            k = n("0798"),
            x = n("8336"),
            C = n("cc20"),
            O = n("62ad"),
            S = n("a523"),
            E = n("132d"),
            N = n("67b6"),
            j = n("43a6"),
            R = n("0fd9"),
            D = n("a844"),
            V = Object(y["a"])(m, i, l, !1, null, null, null),
            A = V.exports;
        w()(V, {
            VAlert: k["a"],
            VBtn: x["a"],
            VChip: C["a"],
            VCol: O["a"],
            VContainer: S["a"],
            VIcon: E["a"],
            VRadio: N["a"],
            VRadioGroup: j["a"],
            VRow: R["a"],
            VTextarea: D["a"]
        });
        var P = {
                name: "App",
                components: {
                    Tool: A
                },
                data: function() {
                    return {}
                }
            },
            T = P,
            L = n("7496"),
            $ = n("40dc"),
            M = n("f6c4"),
            I = n("2fa4"),
            B = n("2a7f"),
            J = Object(y["a"])(T, a, r, !1, null, null, null),
            Q = J.exports;
        w()(J, {
            VApp: L["a"],
            VAppBar: $["a"],
            VMain: M["a"],
            VSpacer: I["a"],
            VToolbarTitle: B["a"]
        });
        var U = n("f309");
        o["a"].use(U["a"]);
        var G = new U["a"]({});
        o["a"].config.productionTip = !1, new o["a"]({
            vuetify: G,
            render: function(e) {
                return e(Q)
            }
        }).$mount("#app")
    },
    ba66: function(e, t, n) {}
});
//# sourceMappingURL=app.a0eafd89.js.map