package org.paradox.updater.model;

import org.objectweb.asm.tree.ClassNode;
import org.objectweb.asm.tree.FieldNode;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 09-06-13
 * Time: 01:33
 * To change this template use File | Settings | File Templates.
 */
public class FieldContainer {

    private final ClassNode owner;
    private final FieldNode field;
    private final String name;

    public FieldContainer(ClassNode owner, FieldNode field, String name) {
        this.owner = owner;
        this.field = field;
        this.name = name;
    }

    public ClassNode getOwner() {
        return owner;
    }

    public FieldNode getField() {
        return field;
    }

    public String getName() {
        return name;
    }
}
