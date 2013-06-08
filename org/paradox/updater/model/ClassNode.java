package org.paradox.updater.model;

import org.objectweb.asm.tree.FieldNode;

import java.util.ArrayList;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */
public class ClassNode extends org.objectweb.asm.tree.ClassNode {

    private final org.objectweb.asm.tree.ClassNode orig;

    public ClassNode(org.objectweb.asm.tree.ClassNode orig) {
        this.orig = orig;
    }

    public FieldNode[] getFields() {
        ArrayList<FieldNode> fields = new ArrayList<FieldNode>();
        for(Object o : orig.fields) {
            fields.add((FieldNode) o);
        }
        return fields.toArray(new FieldNode[fields.size()]);
    }

    public String getName() {
        return orig.name;
    }

    public String getSuperName() {
        return orig.superName;
    }
}
